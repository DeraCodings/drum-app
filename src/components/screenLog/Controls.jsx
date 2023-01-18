import './controls.css'

function Controls(props) {

    const { associatedClip, handleVolume, volume, muteHandlers } = props;
    const [handleMuteOff, handleMuteOn] = muteHandlers;

    return (
        <div className='controls'>
            <div className='controls-wrapper'>
                <div className="select-items">
                    <input type="radio" name="radio" id="on" />
                    <label htmlFor="on" onClick={()=>handleMuteOff()}>ON</label>
                    <input type="radio" name="radio" id="off" />
                    <label htmlFor="off" onClick={()=>handleMuteOn()}>OFF</label>
                </div>
                <div className="displayer">
                    <p id='display'>{ associatedClip }</p>
                </div>
                <div className="volume-control">
                    <input type="range" name="volume" id="volume" aria-label='volume bar' value={volume} onChange={handleVolume} />
                </div>
                <div className="select-items">
                    <input type="radio" name="radio" id="switch-bass-on" />
                    <label htmlFor="switch-bass-on">ON</label>
                    <input type="radio" name="radio" id="switch-bass-off" />
                    <label htmlFor="switch-bass-off">OFF</label>
                </div>
            </div>
        </div>
    )
}

export default Controls