import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Massage from "./Massage/Massage";




const Dialogs = (props) => {

let state = props.dialogsPage

let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} key={d.id} id={d.id}/>)
let massagesElements = state.massages.map (m => <Massage massage={m.massage} key={m.id}/>)
let newMassageBody = state.newMassageBody;

let onSendMassageClick = () => {
    props.sandMassage()
}


let onNewMassgaeChange = (e) => {
   let body = e.target.value;
   props.ubdateNewMassgeBody(body)
   //props.store.dispatch(ubdateNewMassgeBodyCreator(body))
}




    return(
        <div className={s.dialogs}>
            <div className= {s.dialogsItem}>
            {dialogsElements}
            </div>

            <div className={s.massages}>
            <div>{massagesElements}</div>
            <div>
                <div><textarea 
                value={newMassageBody}
                onChange={onNewMassgaeChange} 
                placeholder="Enter your massage">
                    </textarea></div>
                <div><button onClick={onSendMassageClick}>Send</button></div>
            </div>
            
            </div>
            
           
        </div>
    )
}

export default Dialogs;