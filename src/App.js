
import React, {Component} from 'react';

 
import URAHeader from './components/URAHeader'

import './App.css';
import URAMQTTControl from './URAMQTTControl';



export default class App extends Component  {
  constructor(props){
    super(props);
    this.state = {mqttURAInput: 'URA03/input'}
  }

  render() {
    return (
 
      <div>
        <URAHeader title="Controle URA MQTT" />
        <URAMQTTControl topic={this.state.mqttURAInput} />
 
      </div>
 
    );
  }
}
