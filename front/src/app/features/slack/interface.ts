import { createModule } from 'typeless';
import { SlackSymbol } from './symbol';
import { SlackAPI, SlackRTM, SlackEntity } from 'app/types/slack/';

// --- Actions ---
export const [handle, SlackActions, getSlackState] = createModule(SlackSymbol)
  .withActions({
    fetchEmojis: (emojis: SlackAPI.Emoji.List) => ({ payload: { emojis } }),
    fetchUsers: (users: SlackAPI.Users.List) => ({ payload: { users } }),
    fetchChannels: (channels: SlackAPI.Conversations.List) => ({ payload: { channels } }),
    fetchTeamInfo: (teamInfo: SlackAPI.Team.Info) => ({ payload: { teamInfo } }),
    mergeMessages: (messages: SlackEntity.Message.Basic[]) => ({ payload: { messages } }),

    // RTM
    onRTMEmitted: (msg: SlackRTM.Event) => ({ payload: { msg } }),
    onMessage: (message: SlackRTM.Message) => ({ payload: { message } }),
    onReactionAdded: (reaction: SlackRTM.Reaction.Added) => ({ payload: { reaction } }),
    onReactionRemoved: (reaction: SlackRTM.Reaction.Removed) => ({ payload: { reaction } }),
    onChannelMarked: (mark: SlackEntity.Mark) => ({ payload: { mark } }),
  })
  .withState<SlackState>();

// --- Types ---
export type Message = SlackEntity.Message.Basic & { updatedAt: number };
type ChannelId = string;
type Ts = string;
export interface SlackState {
  messagesByChannel: Partial<Record<ChannelId, Record<Ts, Message>>>;
  users: Partial<Record<string, SlackEntity.Member>>;
  emojis: Partial<Record<string, string>>;
  channels: Partial<Record<string, SlackEntity.Conversation>>;
  markedByChannels: Record<ChannelId, Ts>;
  profile: {
    userId: string;
    domain?: string;
  };
}
