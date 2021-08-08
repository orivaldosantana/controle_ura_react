import React from 'react';
import { useMqttState } from 'mqtt-react-hooks';

import './BasicControl.css'

export default function BasicControl() {
  const { client } = useMqttState();

  function handleClick(message) {
    console.log("Click: "+message); 
    return client.publish('URA01/input', message);
  }

  return (
    <div className="controls">
        <button type="button" onClick={() => handleClick('f')}>
            Frente 
        </button>
        <div> 
            <button type="button" onClick={() => handleClick('e')}>
                Esquerda 
            </button>
            <button type="button" onClick={() => handleClick('d')}>
                Direita  
            </button>
        </div>
        <button type="button" onClick={() => handleClick('t')}>
            Trás  
        </button>

  </div> 
  );
}

