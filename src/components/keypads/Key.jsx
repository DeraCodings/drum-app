import './key.css'
import { Howl } from 'howler';

function Key(props) {

    const { letter, sound, handleClip, clip, volume, mute } = props;

    const playAudio = (src) => {
        const audio = new Howl({
            src,
            autoplay: false,
            html5: true,
            mute: mute,
            volume: (volume / 100)
        })
        
        audio.play();
    }

    // I want to add the src of the audio as the value of the 'audio' prop

    return (
        <div className='drum-pad' id={clip} onClick={() => {
            playAudio(sound);
            handleClip(clip);
        }}>
            <audio src={sound} className='clip' id={letter}></audio>
            {letter}
        </div>
    )
}

export default Key