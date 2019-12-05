import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className='Message'>
                <div className='MessageWrapper Author'><div>author</div>{this.props.author}</div>
                <div className='MessageWrapper Text'><div>text</div>{this.props.text}</div>
                <div className='MessageWrapper Date'><div>date</div>{this.props.date}</div>
            </div>
        );
    }
}

export default Message;