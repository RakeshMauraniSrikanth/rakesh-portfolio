import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { WindowDataMap, WindowInfo, WindowKey } from '#types/window';

type WindowStore = {
  windows: {
    [K in WindowKey]: WindowInfo<WindowDataMap[K]>
  }
  nextZIndex: number

  openWindow<K extends WindowKey>(
    key: K,
    data?: WindowDataMap[K]
  ): void

  closeWindow(key: WindowKey): void
  focusWindow(key: WindowKey): void
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = (data ?? null) as typeof win.data
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex;
      }),
  }))
)

export default useWindowStore;