import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function PlayPauseButton ({play, pause}) {
    return (
        <button className='playPauseButton'><FontAwesomeIcon icon={play} /><FontAwesomeIcon icon={pause} /></button>  
    )
}

export default PlayPauseButton 