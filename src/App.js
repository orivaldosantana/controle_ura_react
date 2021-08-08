
import React, {Component} from 'react';

import './App.css';
import ConfForm from './components/ConfForm';

import URAHeader from './components/URAHeader'
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
        
        <ConfForm />
 
      </div>
 
    );
  }
}
