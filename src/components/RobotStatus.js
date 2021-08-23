import React from 'react';
import './RobotStatus.css'

import { useSubscription, useMqttState } from 'mqtt-react-hooks';
import MessageMQTT from './MessageMQTT';

export default function RobotStatus() {

  const { message } = useSubscription(['URA/output']);
  const { connectionStatus } = useMqttState();

  return (
    <div className="Card">
      <div className="Title">
        <h3> Robot Status </h3>
      </div>
      <div className="Content" >
        <p> <strong>Topic: </strong> {message && message.topic} </p>
        <MessageMQTT msg={message && message.topic} />
        <p> <strong>Conection: </strong> {connectionStatus} </p>
      </div>
    </div>
  );
}