//import React from "react";
import { connect } from "react-redux";
import { sandMassageCreator, ubdateNewMassgeBodyCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

/*
const DialogsContainer1 = (props) => {

let state = props.store.getState().dialogsPage


let onSendMassageClick = () => {
    props.store.dispatch(sandMassageCreator())
}


let onNewMassgaeChange = (body) => {
   props.store.dispatch(ubdateNewMassgeBodyCreator(body))
}


    return(
        <Dialogs ubdateNewMassgeBody = {onNewMassgaeChange}
        sandMassage = {onSendMassageClick}
        dialogsPage = {state} />
    )
}*/



const mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sandMassage: ()=>{
            dispatch(sandMassageCreator())
        },
        ubdateNewMassgeBody: (body)=>{
            dispatch(ubdateNewMassgeBodyCreator(body))
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);
 
export default DialogsContainer;