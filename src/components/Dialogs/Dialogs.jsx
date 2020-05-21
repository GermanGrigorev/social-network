import React from 'react';
import './Dialogs.css'
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    const dialogsElements = props.dialogPage.dialogs.map((dialog) => {
        return <Dialog id={dialog.id} name={dialog.Name} key={dialog.id}/>
    });

    const messagesElements = props.dialogPage.messages.map((message) => {
        return <Message text={message.text} key={message.id}/>
    });

    const addMessage = (formData) => {
        props.addMessage(formData.newMessageText);
    }

    return (
        <div className='dialogs'>
            <div className='dialogs__dialogs-list'>
                {dialogsElements}
            </div>
            <div className='dialogs__messages'>
                {messagesElements}
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs
