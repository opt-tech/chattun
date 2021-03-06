import { TimelineSettings } from 'app/types/TimelineSettings';
import { createModule } from 'typeless';
import { GlobalSettingSymbol } from './symbol';

// --- Actions ---
export const [handle, GlobalSettingActions, getGlobalSettingState] = createModule(
  GlobalSettingSymbol,
)
  .withActions({
    $mounted: null,
    updateGlobalSetting: (setting: TimelineSettings) => ({
      payload: { setting },
    }),
  })
  .withState<GlobalSettingState>();

// --- Types ---
export type GlobalSettingState = TimelineSettings;
