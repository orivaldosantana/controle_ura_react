import React from 'react';
import './RobotStatus.css'

import { useSubscription, useMqttState } from 'mqtt-react-hooks';

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
        <p> <strong>Message: </strong> {message && message.message}  </p>
        <p> <strong>Conection: </strong> {connectionStatus} </p>
      </div>
    </div>
  );
}