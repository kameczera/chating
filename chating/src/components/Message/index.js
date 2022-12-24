import './Message.css';

const Message = (props) => {
    if(props.name === 'arthur'){
        return( 
            <div className='message'>
                <p className='messageName'>{props.name}</p>
                <p className='messageContent'>{props.content}</p>
            </div>
        );
    } else {
        return( 
            <div className='message' id='selfMessage'>
                <p className='messageName'>{props.name}</p>
                <p className='messageContent'>{props.content}</p>
            </div>
        );
    }
}

export default Message;