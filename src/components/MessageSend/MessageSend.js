import React from 'react';
import './MessageSend.css';

const MessageSend = (props) => {
    return (
        <div className='MessageSend'>
            <form action="#" onSubmit={props.Submit}>
                <div className='SendWrapper'><span>author </span><input type="text"/></div>
                <div className='SendWrapper'><span>message </span><input type="text"/></div>
                <div className='SendWrapper'><button>Send</button></div>
            </form>
        </div>
    );
};

export default MessageSend;