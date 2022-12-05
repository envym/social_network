const ADD_POST = 'ADD_POST'
const UBDATE_NEW_POST_TEXT = 'UBDATE_NEW_POST_TEXT'

let initialState =  { posts: [
  {id: 1, post: "Hi, how are you?", licesCount:23 },
  {id: 2, post: "It's my first post?", licesCount:43},
  {id: 3, post: "It's my first post?", licesCount:43}
],
newPostText: "it-kama"
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST: 
            return{
              stateCopy: {...state},
              posts: [...state.posts, {id: 4, post: state.newPostText, licesCount: 0}],
              newPostText:''
            }

        case UBDATE_NEW_POST_TEXT: 
          return{
            ...state,
            newPostText: action.newText

          }

        default: return state; 
    }
    
 

}

export const addPostActionCreator = () => {
    return {
      type: 'ADD_POST'
    }
  }
  
  export const ubdateNewPostTextActionCreator = (text) => {
    return {
      type: 'UBDATE_NEW_POST_TEXT', newText: text
    }
  }

export default profileReducer;