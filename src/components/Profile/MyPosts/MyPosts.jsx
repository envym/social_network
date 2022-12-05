import React from "react";
//import { addPostActionCreator, ubdateNewPostTextActionCreator } from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";





const MyPosts = (props) => {
 
    let postsElement = props.posts.map(p =>  <Posts massage = {p.post} likesCount={p.licesCount}/>)

    // Ne post data creation
    let newPostElement = React.createRef();
    

    let onAddPost = () => {
      props.addPost();
      
    }
    

    let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

    return(
      <div className={s.postBlock}>
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
              <button onClick={ onAddPost }>Add post</button>
            </div>
          </div>
        </div>
        <div className={s.posts}>
        {postsElement}
        </div>
      </div>

    )
}

export default MyPosts;