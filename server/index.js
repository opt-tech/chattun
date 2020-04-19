const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const request = require('request')

const middlewares = require('./src/middleware');
const { serverBasePath, frontBasePath } = require('./src/config');

const app = express();
app.use(middlewares.applyHelmet());
app.set('trust proxy', 1);
app.use(middlewares.applySession());

const passport = middlewares.createPassport();
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.static('public'));

app.use(middlewares.applyCors());

app.get('/debug', (req, res) => {
  res.status(200).end();
});

app.get('/auth/slack', passport.authorize('slack-identity'));

app.get('/auth/slack/client', passport.authorize('slack-client'));

app.get(
  '/auth/slack/callbackTmp',
  passport.authenticate('slack-identity', { failureRedirect: `${frontBasePath}` }),
  (req, res) => res.redirect(`${serverBasePath}/auth/slack/client`),
);

app.get(
  '/auth/slack/callback',
  passport.authenticate('slack-client', { failureRedirect: `${frontBasePath}` }),
  (req, res) => res.redirect(frontBasePath),
);

// check authentication
app.use((req, res, next) => {
  if (!(req.session && req.session.passport && req.session.passport.user)) {
    return res.status(401).end();
  }
  const { userId, accessToken } = getSessionProfileFromRequest(req)
  if (!(userId && accessToken)) {
    return res.status(401).end();
  }
  next();
})

app.get('/file', async (req, res) => {
  const { accessToken } = getSessionProfileFromRequest(req)
  const isValidTargetUrl = req.query.target_url.startsWith('https://files.slack.com')
  if (isValidTargetUrl) {
    request({
      url: req.query.target_url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    }).pipe(res)
  } else {
    res.status(400).end();
  }
})

app.get('/connection', (req, res) => {
  const { userId, accessToken } = getSessionProfileFromRequest(req)
  return res.json({ userId, accessToken });
});

function getSessionProfileFromRequest(req) {
  const { userId, accessToken } = req.session.passport.user;
  return { userId, accessToken }
}

app.use((_, __, next) => next(createError(404)));
app.use(function (err, req, res) {
  const error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message: err.message, ...error });
});

app.listen(process.env.PORT || 3100, () => {
  console.log(`server running at ${serverBasePath}`);
});
