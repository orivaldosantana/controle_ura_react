import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import BasicControl from './components/BasicControl';
import RobotStatus from './components/RobotStatus';


export default function URAMQTTControl() {
  return (
    <div>
      <Connector brokerUrl="ws://157.230.89.7:1884" options={{ keepalive: 0 }} >
        <BasicControl />
        <RobotStatus />
      </Connector>
    </div>
  );
}