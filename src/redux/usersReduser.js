const ADD_POST = 'ADD_POST'
const UBDATE_NEW_POST_TEXT = 'UBDATE_NEW_POST_TEXT'

let initialState =  { 
  users: [
  {id: 1, followed: false, fullName: 'Dmitriy', status: 'I am a boss', location:{city: 'Minsk', country: 'Belarus'} },
  {id: 2, followed: false, fullName: 'Misha', status: 'I am a boss too', location:{city: 'Moscow', country: 'Russia'} },
  {id: 3, followed: true, fullName: 'Kirill', status: 'I am a boss too too', location:{city: 'Kyev', country: 'Ukrain'} }

]
};

const usersReducer = (state = initialState, action) => {
    
    switch(action.type){
        default: return state; 
    }

}

export const followAC = () => {{type: 'FOLLOW'}}
export const unfollowAC = () => {{type: 'UNFOLLOW'}}
  

export default usersReducer;