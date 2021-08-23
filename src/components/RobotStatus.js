import React from 'react';
import './RobotStatus.css'

import { useSubscription, useMqttState } from 'mqtt-react-hooks';
import MessageMQTT from './MessageMQTT';

export default function RobotStatus(props) {
  const { message } = useSubscription([props.topic]);
  const { connectionStatus } = useMqttState();

  return (
    <div className="Card">
      <div className="Title">
        <h3> Robot Status </h3>
      </div>
      <div className="Content" >
        <p> <strong>Topic: </strong> {message && message.topic} </p>
        <MessageMQTT msg={message && message.message} />
        <p> <strong>Conection: </strong> {connectionStatus} </p>
      </div>
    </div>
  );
}