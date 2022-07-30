import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
    return(
        <div className={s.posts}>
          <div className={s.item}>
            <img src="https://steamuserimages-a.akamaihd.net/ugc/260461914178313001/169F450E51E322FA925C108A344A015AB82F169E/" alt="" />
            {props.massage}</div>
            <span>like</span> {props.likesCount}

        </div>

    )
}

export default Posts;