import useWindowStore from '#store/window'
import { WindowKey } from '#types/window'

const WindowControls = ({ target }: { target: WindowKey }) => {
    const { closeWindow } = useWindowStore()

    return (
        <div id="window-controls" className='mt-2 ml-2' >
            <button
                type="button"
                className='close'
                aria-label='Close window'
                onClick={() => closeWindow(target)}
            />
            <button
                type="button"
                className='minimize'
                aria-label='Minimize window'
            />
            <button
                type="button"
                className='maximize'
                aria-label='Maximize window'
            />
        </div>
    )
}

export default WindowControls