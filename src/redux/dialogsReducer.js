const UBDATE_NEW_MASSAGE_BODY = 'UBDATE_NEW_MASSAGE_BODY'
const SAND_MASSAGE = 'SAND_MASSAGE'

let initialState = {  
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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UBDATE_NEW_MASSAGE_BODY: 
            return {
              ...state,
              newMassageBody: action.body};
           
      
        case SAND_MASSAGE: 
            let body = state.newMassageBody;
            return {...state, 
              massages: [...state.massages, {id: 6, massage: body}],
              newMassageBody: ''};
           
             
        default: return state; 
    }

}

export const sandMassageCreator = () => {
    return {
      type: 'SAND_MASSAGE'
    }
  }
  
  export const ubdateNewMassgeBodyCreator = (body) => {
    return {
      type: 'UBDATE_NEW_MASSAGE_BODY', body: body
    }
  }

export default dialogsReducer;