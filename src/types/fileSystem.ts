export type FileSystemNode = {
  id: number
  name: string
  icon: string
  kind: 'folder' | 'file'
  type?: 'work' | 'about' | 'resume' | 'trash'
  position?: string
  windowPosition?: string

  // folder
  children?: FileSystemNode[]

  // file
  fileType?: 'txt' | 'img' | 'pdf'
  imageUrl?: string
  subtitle?: string
  description?: string[]
}
