import React, {Component} from 'react';
import './Message.css';
import moment from 'moment';
class Message extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.id !== this.props.id
    }
    render() {
        return (
            <div className='Message'>
                <div className='MessageWrapper Author'><div>author</div>{this.props.author}</div>
                <div className='MessageWrapper Text'><div>text</div>{this.props.text}</div>
                <div className='MessageWrapper Date'><div>date</div>{moment(this.props.date).format('LLL')}</div>
            </div>
        );
    }
}

export default Message;