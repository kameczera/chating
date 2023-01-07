import { useState } from 'react';
import './WriteMessage.css';

const WriteMessage = (props) => {

    const [content, setContent] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();
        props.newMessage(content);
        setContent('');
    }

    return( 
        <div className='writeMessage'>
            <form className='inputButtonMessage' onSubmit={sendMessage}>
                <input className='inputMessage' value={content} onChange={(e) => setContent(e.target.value)}/>
                <button className='buttonSendMessage'/>
            </form>
        </div>
    );
}

export default WriteMessage;