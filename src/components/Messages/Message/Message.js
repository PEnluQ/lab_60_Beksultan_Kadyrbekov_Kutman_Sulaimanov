import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className='Message'>
                <div className='MessageWrapper Author'><div>author</div>Beks</div>
                <div className='MessageWrapper Text'><div>text</div>Hello</div>
                <div className='MessageWrapper Date'><div>date</div>11.12.2019</div>
            </div>
        );
    }
}

export default Message;