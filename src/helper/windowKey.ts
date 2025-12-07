import { FileSystemNode } from "#types/location"

export const getWindowKeyForNode = (item: FileSystemNode): string | null => {
    if (item.kind === 'folder') return 'finder'

    switch (item.fileType) {
        case 'pdf':
            return 'resume'
        case 'txt':
            return 'txtfile'
        case 'img':
            return 'imgfile'
        default:
            return null
    }
}
