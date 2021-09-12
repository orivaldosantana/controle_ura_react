import React from 'react';

export default function MessageMQTT(props) {
    let formatedTime = -1;
    let leftLineSensor = -1;
    let rightLineSensor = -1;
    let distance = -1; 
    if ( props.msg ){ 
        let messageTerms = props.msg.split(' ');
        let seconds = parseInt(messageTerms[1]);
        
        let date = new Date(null);
        date.setSeconds(seconds); 
        formatedTime = date.toISOString().substr(11, 8);
         
        distance = messageTerms[2]; 
        leftLineSensor = messageTerms[3]; 
        rightLineSensor = messageTerms[4]; 
    }
    return (
        <div>
            <p> <strong>Sensor de Distância(cm): </strong> {distance}  </p>
            <p> <strong>Sensor de Linha Esquerdo: </strong> {leftLineSensor}  </p>
            <p> <strong>Sensor de Linha Direito: </strong> {rightLineSensor}  </p>
            <p> <strong>Tempo de Atividade(min): </strong> {formatedTime}  </p>
        </div>
    );
}