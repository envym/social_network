import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
      <div>
        <div className={s.image}>
          <img src="http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt="" />
        </div>
        <div className={s.descriptionBlock}> ava + description</div>
      </div>

    )
}

export default ProfileInfo;