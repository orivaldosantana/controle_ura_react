import React, { Component } from "react";

import './ConfForm.css'

export default class ConfForm extends Component {

    constructor(props) {
        super(props);

        this.state = { topicToSend: props.inputTopic, topicToReceive: props.outputTopic }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTopicToSend = this.handleChangeTopicToSend.bind(this);
        this.handleChangeTopicToReceive = this.handleChangeTopicToReceive.bind(this);
    }

    handleChangeTopicToSend(event) {
        this.setState({ topicToSend: event.target.value });
    }

    handleChangeTopicToReceive(event) {
        this.setState({ topicToReceive: event.target.value });
    }

    handleSubmit(event) {
        // Obtem o valor do tópico e atualiza a tela 
        console.log("topicToReceive: " + this.state.topicToReceive);
        this.props.onTopicChange(this.state.topicToSend, this.state.topicToReceive);
        event.preventDefault();
    }

    render() {

        return (
            <form className="Form" onSubmit={this.handleSubmit} >
                <div className="TextIn">
                    <strong>Tópico para enviar: </strong>
                    <input type="text" value={this.state.topicToSend} onChange={this.handleChangeTopicToSend} id="topic_to_send" />
                </div>
                <div className="TextIn">
                    <strong>Tópico para receber: </strong>
                    <input type="text" value={this.state.topicToReceive} onChange={this.handleChangeTopicToReceive} id="topic_to_receive" />
                </div>
                <div className="BtnSubmit" >
                    <input type="submit" value="Ok" />
                </div>

            </form>
        );
    }
}