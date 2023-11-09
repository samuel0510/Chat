import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b7ed87d8-4cf3-4b43-89b2-e7cd4b87205e', 
        props.user.username, 
        props.user.secret
        );
    return (
        <div style={{ height:'100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatsPage