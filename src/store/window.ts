import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { FileSystemNode } from '#types/location';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type WindowKey =
  | 'finder'
  | 'contact'
  | 'resume'
  | 'safari'
  | 'photos'
  | 'terminal'
  | 'txtfile'
  | 'imgfile'

type WindowDataMap = {
  finder: null
  contact: null
  resume: FileSystemNode | null
  safari: null
  photos: FileSystemNode | null
  terminal: null
  txtfile: FileSystemNode | null
  imgfile: FileSystemNode | null
}
type WindowInfo<Data = unknown> = {
  isOpen: boolean;
  zIndex: number;
  data: Data | null;
};


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

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        win.data = (data ?? win.data) as any
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