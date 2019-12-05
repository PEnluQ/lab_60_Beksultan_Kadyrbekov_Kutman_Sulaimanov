import React, {Component} from 'react';
import MessageSend from "../../components/MessageSend/MessageSend";
import Messages from "../../components/Messages/Messages";

class Messenger extends Component {
    render() {
        console.log('hello');
        return (
            <div className='Messenger'>
                <MessageSend/>
                <Messages/>
            </div>
        );
    }
}

export default Messenger;