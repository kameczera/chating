import './Chat.css';
import Message from '../Message';
import WriteMessage from '../WriteMessage';
import { useState } from 'react';

const Chat = () => {

    const [messages, setMessages] = useState([
        {
            name: 'arthur',
            content: 'Hello bro!'
        },
        {
            name: 'kamei',
            content: 'hey'
        },
        {
            name: 'arthur',
            content: 'test'
        },
        {
            name: 'kamei',
            content: 'abr'
        }
    ]);

    return(
        <div className='chat'>
            {messages.map(message => <Message name={message.name} content={message.content}/>)}
            <WriteMessage newMessage={message => {setMessages([...messages, {name:'kamei', content: message}])}}/>
        </div>
    );
}

export default Chat;