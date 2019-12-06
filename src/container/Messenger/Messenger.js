import React, {Component} from 'react';
import MessageSend from "../../components/MessageSend/MessageSend";
import Messages from "../../components/Messages/Messages";

class Messenger extends Component {
    state = {
        currentMessage: {author: 'Beks', message: 'Hello, guys'},
        newMessages: [],
    };
    componentDidMount = async () => {

        console.log('Messenger didMount');
        const response = await fetch('http://146.185.154.90:8000/messages');
        if(response.ok){
            const messages = await response.json();
            this.setState({newMessages: messages.reverse()});
            console.log(messages);
        } else{
            throw new Error('Something went wrong with the request');
        }
        const interval = setInterval(async () => {
            const lastDateTime = this.state.newMessages[0].datetime;
            const newResponse = await fetch(`http://146.185.154.90:8000/messages?datetime=${lastDateTime}`);
            if(newResponse.ok){
                const newMessages = await newResponse.json();
                if(newMessages.length){
                    const messages = [...this.state.newMessages.reverse()];
                    messages.push(...newMessages);
                    this.setState({newMessages: messages.reverse()})
                }
            }
        }, 2000);
        //todo: IS it ok to have two setStates

    };

    submitMessage = async (event) => {
        event.preventDefault();
        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();
        data.set('message', this.state.currentMessage.message);
        data.set('author', this.state.currentMessage.author);
        const sendingD = await fetch(url, {method: 'post', body: data});
        this.setState({currentMessage: {author: '', message: ''}});
        if(!sendingD.ok){
            throw new Error('Something went wrong while sending your data')
        }
    };
    changeAuthor = (event) => {
        const currentMessage = {...this.state.currentMessage};
        currentMessage.author = event.target.value;
        this.setState({currentMessage}); //todo: have to check if it is correct way
    };
    changeText = (event) => {
        const currentMessage = {...this.state.currentMessage};
        currentMessage.message = event.target.value;
        this.setState({currentMessage}) //todo: have to check if it is correct way
    };
    render() {
        console.log('[Messanger] render');
        return (
            <div className='Messenger'>
                <MessageSend
                    Submit={(event) => this.submitMessage(event)}
                    authorValue={this.state.currentMessage.author}
                    textValue={this.state.currentMessage.message}
                    authorChange={(event) => this.changeAuthor(event)}
                    textChange={(event) => this.changeText(event)}
                />
                <Messages
                    messages={this.state.newMessages}
                />
            </div>
        );
    }
}

export default Messenger;