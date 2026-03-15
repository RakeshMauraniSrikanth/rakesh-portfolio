import { FileSystemNode } from "./fileSystem"

export type WindowKey =
    | 'finder'
    | 'contact'
    | 'resume'
    | 'safari'
    | 'photos'
    | 'terminal'
    | 'txtfile'
    | 'imgfile'

  export type WindowDataMap = {
  finder: null
  contact: null
  resume: FileSystemNode | null
  safari: null
  photos: FileSystemNode | null
  terminal: null
  txtfile: FileSystemNode | null
  imgfile: FileSystemNode | null
}
export type WindowInfo<Data = unknown> = {
  isOpen: boolean;
  zIndex: number;
  data: Data | null;
};