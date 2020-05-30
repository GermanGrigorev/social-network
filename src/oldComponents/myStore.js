import dialogsReducer from '../Redux/dialogsReducer';
import profileReducer from '../Redux/profileReducer';

let myStore = {
    _state: {
        dialogPage: {
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
            newMessageText: 'new message',
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likeCount: 5},
                {id: 2, message: 'First post', likeCount: 20},
            ],
            newPostText: 'new post',
        },
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        debugger;
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber();
    },

    _callSubscriber() {
    },
};

export default myStore
