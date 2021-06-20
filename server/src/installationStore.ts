import { InstallationStore, Installation } from '@slack/bolt';

let db: Map<string, Installation<'v1' | 'v2', boolean>> = new Map([
  [process.env.TEST_USER_TEAM_ID!, JSON.parse(process.env.TEST_USER_INSTALLATION!)],
]);

export const installationStore: InstallationStore = {
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
};
