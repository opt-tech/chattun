import { App, ExpressReceiver, Installation } from '@slack/bolt';
import express from 'express';

let db: Map<string, Installation<'v1' | 'v2', boolean>> = new Map();

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET!,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  stateSecret: 'my-state-secret',
  installerOptions: {},
  scopes: ['channels:history', 'reactions:read'],
  installationStore: {
    storeInstallation: async (installation) => {
      console.log(installation);
      // 実際のデータベースに保存するために、ここのコードを変更
      if (installation.isEnterpriseInstall) {
        // OrG 全体へのインストールに対応する場合
        db.set(installation.enterprise!.id, installation);
        return;
      } else {
        // 単独のワークスペースへのインストールの場合
        db.set(installation.team!.id, installation);
        return;
      }
      throw new Error('Failed saving installation data to installationStore');
    },
    fetchInstallation: async (installQuery) => {
      // 実際のデータベースから取得するために、ここのコードを変更
      if (installQuery.isEnterpriseInstall && installQuery.enterpriseId !== undefined) {
        // OrG 全体へのインストール情報の参照
        return db.get(installQuery.enterpriseId)!;
      }
      if (installQuery.teamId !== undefined) {
        // 単独のワークスペースへのインストール情報の参照
        return db.get(installQuery.teamId)!;
      }
      throw new Error('Failed fetching installation');
    },
  },
});

const app = new App({ receiver });

receiver.router.get('/slack/user_install', async (req, res) => {
  try {
    const url = await receiver.installer?.generateInstallUrl({
      scopes: [],
      // scopes: ['channels:history'],
      userScopes: ['channels:history', 'reactions:read'],
      redirectUri: 'http://localhost:3100/slack/oauth_redirect',
      // redirectUri: 'https://b5e1274528b9.ngrok.io/slack/oauth_redirect',
    });

    res.send(buildSlackUrl(url || ''));
  } catch (error) {
    console.log(error);
  }
});
function buildSlackUrl(url: string) {
  return `<a href=${url}><img alt=""Add to Slack"" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>`;
}
app.use(express.static('../public') as any);

app.event('reaction_added', ({ event }) => {
  console.log(event);
  return Promise.resolve();
});

(async () => {
  await app.start(3100);
  console.log('⚡️ Bolt app started!!!!');
})();
