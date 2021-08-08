import React, {Component} from "react";

import './ConfForm.css' 

export default class ConfForm extends Component {

    constructor(props){
        super(props); 

        this.state = {topic: props.defaultTopic}

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChangeTopic = this.handleChangeTopic.bind(this); 
    }

    handleChangeTopic(event){
        this.setState({topic: event.target.value}); 
    }

    handleSubmit(event){
        // Obtem o valor do tópico e atualiza a tela 
        console.log("Tópico: "+ this.state.topic); 
        this.props.onTopicChange(this.state.topic);
        event.preventDefault(); 
    }

    render() {

        return ( 
            <form className="Form" onSubmit={this.handleSubmit} >
                <div className="TextIn">
                    <strong>Tópico MQTT: </strong> 
                    <input type="text" value={this.state.topic} onChange={this.handleChangeTopic} id="topic" />
                </div>
                <div className="BtnSubmit" >
                    <input type="submit" value="Ok" />
                </div>

            </form>
        );
    }
}