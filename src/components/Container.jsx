import {useState} from 'react'
import KeysContainer from './keypads/KeysContainer'
import Controls from './screenLog/Controls'

// I want to update the text of the displayer.
/**
 * have a state @var
 * update the @var when the drum-pad is clicked
 * @returns the @var 
 * 
*/

function Container() {

    const [associatedClip, setAssociatedClip] = useState('');
    const [volume, setVolume] = useState(50);
    const [mute, setMute] = useState(false);

    const handleMuteOn = () => {
        setMute(true);
    }

    const handleMuteOff = () => {
        setMute(false);
    }

    const handleClip = (clip) => {
        setAssociatedClip(clip);
    }

    const handleVolume = (e) => {
        setVolume(e.target.value);
    }

    return (
        <div className='container' id='drum-machine'>
            <KeysContainer handleClip={handleClip} volume={volume} mute={mute} />
            <Controls associatedClip={associatedClip} handleVolume={handleVolume} muteHandlers={[handleMuteOff, handleMuteOn]} volume={volume} />
        </div>
    )
}

export default Container