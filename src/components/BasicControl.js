import React from 'react';
import { useMqttState } from 'mqtt-react-hooks';

import './BasicControl.css'

export default function BasicControl(props) {


    const { client } = useMqttState();
    //console.log("Robot Control: "+props.topic) 
    const uraTopic = props.topic;

    function handleClick(message) {
        console.log("Click: " + message + " on " + uraTopic);
        return client.publish(uraTopic, message);
    }

    return (
        <div className="controls">
            <button type="button" onClick={() => handleClick('FRT')}>
                Frente
            </button>
            <div>
                <button type="button" onClick={() => handleClick('ESQ')}>
                    Esquerda
                </button>
                <button type="button" onClick={() => handleClick('DIR')}>
                    Direita
                </button>
            </div>
            <button type="button" onClick={() => handleClick('TRS')}>
                Trás
            </button>

        </div>
    );
}

