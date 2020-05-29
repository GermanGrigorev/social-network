import React from 'react';
import './Dialogs.css'
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    const dialogsElements = props.dialogPage.dialogs.map((dialog) => {
        return (
            <Dialog
                id={dialog.id}
                name={dialog.Name}
                key={dialog.id}
            />
        );
    });

    const messagesElements = props.dialogPage.messages.map((message) => {
        return <Message text={message.text} key={message.id}/>
    });

    const addMessage = (formData) => {
        props.addMessage(formData.newMessageText);
    }

    return (
        <div className='Dialogs_gridTemplate Dialogs_padding'>
            <div >
                {dialogsElements}
            </div>
            <div >
                {messagesElements}
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs
