import { App, LogLevel, SocketModeReceiver } from '@slack/bolt';
import { installationStore } from './installationStore';
const clientOptions = {
  // enable this for dev instance
  // slackApiUrl: 'https://dev.slack.com/api/'
};

const socketModeReceiver = new SocketModeReceiver({
  appToken: process.env.SLACK_APP_TOKEN!,
  installerOptions: {
    clientOptions: {},
    userScopes: ['message.channels', 'reaction_added', 'reaction_removed', 'im:history'],
    // redirectUriPath: 'http://localhost:3000/slack/oauth_redirect',
    // use the following when running against a dev instance and using OAuth
    // authorizationUrl: 'https://dev.slack.com/oauth/v2/authorize',
  },
  installationStore,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  stateSecret: 'my-state-secret',
  // scopes: ['channels:read', 'chat:write', 'channels:manage', 'channels:history'],

  logLevel: LogLevel.DEBUG,
});

const app = new App({
  receiver: socketModeReceiver,
  clientOptions,
  appToken: process.env.APP_TOKEN,
  socketMode: true,
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');
})();

app.event('message', async ({ body, context }) => {
  console.log(body);
});
app.event('reaction_added', async (event) => {
  console.log(event.body);
});
