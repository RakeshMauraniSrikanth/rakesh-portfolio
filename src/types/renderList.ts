import { FileSystemNode } from '#types/fileSystem'

// Props used by Finder's sidebar list renderer
export type RenderListProps = {
  name: string
  items: FileSystemNode[]
}
