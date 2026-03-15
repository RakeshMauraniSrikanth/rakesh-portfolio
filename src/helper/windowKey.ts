import { FileSystemNode } from "#types/fileSystem"
import { WindowKey } from "#types/window"

const fileTypeToWindow: Record<NonNullable<FileSystemNode['fileType']>, WindowKey> = {
  pdf: 'resume',
  txt: 'txtfile',
  img: 'imgfile'
}

export const getWindowKeyForNode = (item: FileSystemNode): WindowKey | null => {
  if (item.kind === 'folder') return 'finder'

  return item.fileType ? fileTypeToWindow[item.fileType] ?? null : null
}

