import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";



let posts = [
  {id: 1, post: "Hi, how are you?", licesCount:23 },
  {id: 2, post: "It's my first post?", licesCount:43},
  {id: 2, post: "It's my first post?", licesCount:43}] 
  

let postsElement = posts.map(p =>  <Posts massage = {p.post} likesCount={p.licesCount}/>)

const MyPosts = () => {
    return(
      <div className={s.postBlock}>
        <div>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button>Add post</button>
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