import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    //posts={props.profilePage.posts} 
    //newPostText={props.profilePage.newPostText}

    return(
      <div className={s.content}>main Content
        <ProfileInfo/>
     
        <MyPostsContainer 
        store = {props.store}
        />   
      </div>

    )
}

export default Profile;