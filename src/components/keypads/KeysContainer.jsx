import './key_container.css'
import Key from './Key'
import { arrayOfKeys } from './arrayOfKeys';

export default function KeysContainer(props) {

    const { handleClip, volume, mute } = props;

    return (
        <div className='key-container'>
            {arrayOfKeys.map(pad => (
                <Key key={pad.id} mute={mute} volume={volume} letter={pad.letter} sound={pad.sound} clip={pad.clip} handleClip={handleClip} />
            ))}
        </div>
    )
}
