const { App } = require('@slack/bolt');

const app = new App({
  logLevel: 'debug', // これはログレベルの調整なので削除しても OK です
  socketMode: true,
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
});

// イベント API
app.message('こんにちは', async ({ message, say }) => {
  console.log(message);
  await say(`:wave: こんにちは <@${message.user}>！`);
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');
})();
