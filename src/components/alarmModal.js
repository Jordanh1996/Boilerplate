import React from 'react';
import Modal from 'react-modal';

const AlarmModal = (props) => (
    
    <Modal
    isOpen={props.isopen}
    contentLabel="Alarm Clock"
    onRequestClose={props.isclose}
    closeTimeoutMS={200}
    ariaHideApp={false}
    className="modal"
    >

    <p>{props.description}</p>

    <audio src="/sounds/Wake-up-sounds.mp3" autoPlay />
    
    <div>
        <button onClick={props.isclose}>Turn off</button>
    </div>
    </Modal>

)

export default AlarmModal;