import './Chat.css';
import Message from '../Message';
import { useState } from 'react';
import WriteMessage from '../WriteMessage';

const Chat = () => {

    const [message, setMessage] = useState({});

    const sendMessage = () => {
        messages.push({name: 'kamei', content: {message}});
    }

    const messages = [
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
            content: 'Hello bro!'
        }
    ]
    return(
        <div className='chat'>
            <form onSubmit={sendMessage}>
                {messages.map(message => <Message name={message.name} content={message.content}/>)}
                <WriteMessage messages={messages} newMessage={message => setMessage(message)}/>
            </form>
        </div>
    );
}

export default Chat;