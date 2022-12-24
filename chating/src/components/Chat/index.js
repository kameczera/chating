import './Chat.css';
import Message from '../Message';
import { useContext } from 'react';
import ContextContact from '../../context/ContextContact';
import WriteMessage from '../WriteMessage';

const Chat = () => {

    const {contact} = useContext(ContextContact);

    const messages = [
        {
            name: 'arthur',
            content: 'Hello bro!'
        },
        {
            name: 'you',
            content: 'hey'
        },
        {
            name: 'arthur',
            content: 'test'
        },
        {
            name: 'you',
            content: 'Hello bro!'
        }
    ]
    return(
        <div className='chat'>
            {messages.map(message => <Message name={message.name} content={message.content}/>)}
            <WriteMessage />
        </div>
    );
}

export default Chat;