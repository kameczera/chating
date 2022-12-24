import './Chat.css';
import Message from '../Message';

const Chat = () => {

    const messages = [
        {
            name: 'arthur',
            content: 'Hello bro!'
        },
        {
            name: 'you',
            content: 'hey'
        }
    ]

    return(
        <div className='chat'>
            {messages.map(message => <Message name={message.name} content={message.content}/>)}
        </div>
    );
}

export default Chat;