import React from 'react';
import Message from "./Message/Message";
const Messages = (props) => {
    return (
        <div className='Messages'>
            {props.messages.reverse().map(message => (
                <Message
                    key={message._id}
                    author={message.author}
                    text={message.message}
                    date={message.datetime}
                />
            ))}
        </div>
    );
};

export default Messages;