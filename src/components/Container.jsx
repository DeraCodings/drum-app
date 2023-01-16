import React from 'react'
import KeysContainer from './keypads/KeysContainer'
import Controls from './screenLog/Controls'

function Container() {
    return (
        <div className='container'>
            <KeysContainer />
            <Controls />
        </div>
    )
}

export default Container