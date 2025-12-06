import { locations } from '#constants'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Location = (typeof locations)[keyof typeof locations]

type LocationStore = {
    activeLocation: Location | null
    setActiveLocation: (location: Location | null) => void
    resetActiveLocation: () => void
}

const DEFAULT_LOCATION: Location = locations.work

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
