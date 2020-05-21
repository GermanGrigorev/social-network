const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 0, Name: 'Masha'},
        {id: 1, Name: 'Misha'},
        {id: 2, Name: 'Lena'},
        {id: 3, Name: 'Pasha'},
        {id: 4, Name: 'Dima'},
    ],

    messages: [
        {id: 0, text: 'buy'},
        {id: 1, text: 'hello'},
        {id: 2, text: 'hey'},
        {id: 3, text: 'where are you'},
        {id: 4, text: 'miss u'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: state.messages.length,
                // text: state.newMessageText,
                text: action.newMessageText,
            };
            return  {
                ...state,
                messages: [...state.messages, message],
            }
        default: return state;
    }
}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer;
