import React from "react";
import s from "./../Dialogs.module.css";


const Massage = (props) => {
    return(
    <div className={s.massage}>
        {props.massage}
    </div>
    )
}

export default Massage;