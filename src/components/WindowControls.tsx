import useWindowStore, { WindowKey } from '#store/window'
import React from 'react'

const WindowControls = ({ target }: { target: string }) => {
    const { closeWindow } = useWindowStore()

    return (
        <div id="window-controls" className='mt-2 ml-2' >
            <div className='close' onClick={() => closeWindow(target as WindowKey)} />
            <div className='minimize' />
            <div className='maximize' />


        </div>
    )
}

export default WindowControls