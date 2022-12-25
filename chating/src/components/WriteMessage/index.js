import './WriteMessage.css';

const WriteMessage = (props) => {

    const sendMessage = () => {
        props.message.push(newMessage);
    }
    return( 
        <div className='writeMessage'>
            <input className='inputMessage' value={props.newMessage}/>
            <button className='buttonSendMessage' onClick={sendMessage}/>
        </div>
    );
}

export default WriteMessage;