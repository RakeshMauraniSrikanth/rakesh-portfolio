import { locations } from '#constants'
import { FileSystemNode } from '#types/fileSystem'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type Location = (typeof locations)[keyof typeof locations]

type LocationStore = {
    activeLocation: FileSystemNode | null
    setActiveLocation: (loc: FileSystemNode | null) => void
    resetActiveLocation: () => void
}

const DEFAULT_LOCATION: FileSystemNode = locations.work

const useLocationStore = create(
    immer<LocationStore>((set) => ({
        activeLocation: DEFAULT_LOCATION,

        setActiveLocation: (location) =>
            set((state) => {
                if (location === undefined) return
                state.activeLocation = location
            }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION
            })
    }))
)

export default useLocationStore
