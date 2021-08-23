import React from 'react';

export default function MessageMQTT(props) {
    return (
        <div>
            <p> <strong>Sensor de Distância(cm): </strong> XXX  </p>
            <p> <strong>Sensor de Linha Esquerdo: </strong> XXX  </p>
            <p> <strong>Sensor de Linha Direito: </strong> XXX  </p>
            <p> <strong>Tempo de Atividade(min): </strong> {props.msg}  </p>
        </div>
    );
}