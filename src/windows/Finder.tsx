import { WindowControls } from '#components'
import { Search } from 'lucide-react'
import { locations } from '#constants'
import useLocationStore from '#store/location'
import clsx from 'clsx'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore, { WindowKey } from '#store/window'
import { FileSystemNode } from '#types/location'
import { getWindowKeyForNode } from '#helper/windowKey.ts'


type RenderListProps = {
    name: string
    items: FileSystemNode[]
}

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()

    const openItem = (item: FileSystemNode) => {
        const windowKey = getWindowKeyForNode(item)

        if (!windowKey) return

        openWindow(windowKey as WindowKey, item)
    }

    const renderList = ({ name, items }: RenderListProps) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={clsx(
                            activeLocation && item.id === activeLocation.id
                                ? 'active'
                                : 'not-active'
                        )}
                        onClick={() => setActiveLocation(item)}
                    >
                        <img src={item.icon} alt={item.name} className="w-4" />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" size={32} />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList({
                        name: 'Favorites',
                        items: Object.values(locations),
                    })}

                    {locations.work.children && renderList({
                        name: 'Work',
                        items: locations.work.children,
                    })}
                </div>

                <ul className="content">
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow


