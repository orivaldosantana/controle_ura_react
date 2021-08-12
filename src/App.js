
import React, {Component} from 'react';

import './App.css';
import ConfForm from './components/ConfForm';

import URAHeader from './components/URAHeader'
import URAMQTTControl from './URAMQTTControl';




export default class App extends Component  {
  constructor(props){
    super(props);
    this.state = {mqttURAInput: 'URA03/input',mqttURAOutput: 'URA03/output' , bodyChoice: 1};

    this.handleTopicChange = this.handleTopicChange.bind(this);
  }

  handleTopicChange(topicIn, topicOut){
    this.setState({mqttURAInput: topicIn, mqttURAOutput: topicOut }); 
    this.setState({bodyChoice: 2}); 
    console.log("Tópicos handleTopicChange:\n"+topicIn+"\n"+topicOut );  
    
  }

  

  render() {
    
    console.log("Tópico Atual: "+this.state.mqttURAInput );  
    let bodyApp; 
    if ( this.state.bodyChoice === 1 ){ 
      bodyApp = <ConfForm onTopicChange={this.handleTopicChange} inputTopic={this.state.mqttURAInput} outputTopic={this.state.mqttURAOutput} /> 
    }
    else if (this.state.bodyChoice === 2 ) {
      bodyApp = <URAMQTTControl topic={this.state.mqttURAInput} /> 
    }

    return (
 
      <div>
        <URAHeader title="Controle URA MQTT" />
        {bodyApp} 
        
      </div>
 
    );
  }
}
