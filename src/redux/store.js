import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"



let store = {
  _state: {
    profilePage:{ posts: [
        {id: 1, post: "Hi, how are you?", licesCount:23 },
        {id: 2, post: "It's my first post?", licesCount:43},
        {id: 3, post: "It's my first post?", licesCount:43}
      ],
      newPostText: "it-kama"
    },
    dialogsPage:{  
        dialogs: [
        {id: 1, name: "Kirill"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Misha"},
        {id: 5, name: "Ilon"},
        {id: 6, name: "Viktor"},
        {id: 7, name: "Olga"}
      ],
        massages: [
        {id: 1, massage: "Hi"},
        {id: 2, massage: "How are you?"},
        {id: 3, massage: "Ok"}
      ],
        newMassageBody: ""
    },
    sidebar:{}
  
  },

  _callSubscriber (){
    console.log('state is changed!')
  },

  getState(){
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },



  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);

  }

}
 

window.store = store;
export default store;