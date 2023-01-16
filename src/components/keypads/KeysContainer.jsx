import './key_container.css'
import Key from './Key'

export default function KeysContainer() {
    return (
        <div className='key-container'>
            <Key letter='Q' />
            <Key letter='W' />
            <Key letter='E' />
            <Key letter='A' />
            <Key letter='S' />
            <Key letter='D' />
            <Key letter='Z' />
            <Key letter='X' />
            <Key letter='C' />
        </div>
    )
}
