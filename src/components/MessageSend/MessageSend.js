import React from 'react';
import './MessageSend.css';

const MessageSend = (props) => {
    return (
        <div className='MessageSend'>
            <form action="#" onSubmit={props.Submit}>
                <div className='SendWrapper'><span>author </span><input type="text" onChange={props.authorChange} value={props.authorValue}/></div>
                <div className='SendWrapper'><span>message </span><input type="text" onChange={props.textChange} value={props.textValue}/></div>
                <div className='SendWrapper'><button type='submit'>Send</button></div>
            </form>
        </div>
    );
};

export default MessageSend;