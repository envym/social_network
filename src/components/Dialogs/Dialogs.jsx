import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogsItem = (props) =>{
    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to= {path} >{props.name}</NavLink> 
        </div>
    )
}

const Massage = (props) => {
    return(
    <div className={s.massage}>
        {props.massage}
    </div>
    )
}

let dialogs = [
    {id: 1, name: "Kirill"},
    {id: 2, name: "Vlad"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Misha"},
    {id: 5, name: "Ilon"},
    {id: 6, name: "Viktor"},
    {id: 7, name: "Olga"}]

let massages = [
    {id: 1, massage: "Hi"},
    {id: 2, massage: "How are you?"},
    {id: 3, massage: "Ok"}]


let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id}/>)
let massagesElements = massages.map (m => <Massage massage={m.massage}/>)


const Dialogs = (props) => {

    return(
        <div className={s.dialogs}>
            <div className= {s.dialogsItem}>
            {dialogsElements}
            </div>

            <div className={s.massages}>
            {massagesElements}
            </div>
        </div>
    )
}

export default Dialogs;