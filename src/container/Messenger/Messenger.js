import React, {Component} from 'react';
import MessageSend from "../../components/MessageSend/MessageSend";
import Messages from "../../components/Messages/Messages";

class Messenger extends Component {
    state = {
        currentMessage: {author: 'Beks', message: 'Hello, guys'},
    };
    submitMessage = (event) => {
        event.preventDefault();
        console.log('hello');
    };
    changeAuthor = (event) => {
        const currentMessage = {...this.state.currentMessage};
        currentMessage.author = event.target.value;
        console.log(currentMessage);
        this.setState({currentMessage}); //todo: have to check if it is correct way
    };
    changeText = (event) => {
        const currentMessage = {...this.state.currentMessage};
        currentMessage.message = event.target.value;
        this.setState({currentMessage}) //todo: have to check if it is correct way
    };
    render() {
        console.log('hello');
        return (
            <div className='Messenger'>
                <MessageSend
                    Submit={(event) => this.submitMessage(event)}
                    authorValue={this.state.currentMessage.author}
                    textValue={this.state.currentMessage.message}
                    authorChange={(event) => this.changeAuthor(event)}
                    textChange={(event) => this.changeText(event)}
                />
                <Messages/>
            </div>
        );
    }
}

export default Messenger;