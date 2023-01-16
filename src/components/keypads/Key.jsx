import './key.css'

function Key(props) {

    const { letter } = props;

    return (
        <div className='key'>
            <audio src=""></audio>
            {letter}
        </div>
    )
}

export default Key