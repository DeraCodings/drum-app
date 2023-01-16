import './controls.css'

function Controls() {
    return (
        <div className='controls'>
            <div className='controls-wrapper'>
                <div className="select-items">
                    <select name="switch" id="switch">
                        <optgroup>
                            <option value="on">ON</option>
                            <option value="off">OFF</option>
                        </optgroup>
                    </select>
                </div>
                <div className="displayer">
                    <p></p>
                </div>
                <div className="volume-control">
                    <input type="range" name="volume" id="volume" aria-label='volume bar' />
                </div>
                <div className="select-items">
                    <select name="switch" id="switch">
                        <optgroup>
                            <option value="on">ON</option>
                            <option value="off">OFF</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Controls