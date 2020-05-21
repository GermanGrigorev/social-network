import StoreContext from './storeContext';
import {addMessage, updateMessage} from '../Redux/dialogsReducer';
import Dialogs from '../components/Dialogs/Dialogs';
import React from 'react';

const DialogsContainerOld = (props) => {
    // let state = props.store.getState();
    //
    // let addMessage = () => {
    //     props.store.dispatch(addMessage());
    // }
    //
    // let updateNewMessageText = (text) => {
    //     props.store.dispatch(updateMessage(text));
    // }

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessage());
                }

                let updateNewMessageText = (text) => {
                    store.dispatch(updateMessage(text));
                }

                return <Dialogs addMessage={addMessage}
                                updateNewMessageText={updateNewMessageText}
                                dialogPage={state.dialogPage}/>
            }
            }
        </StoreContext.Consumer>
    );
};
