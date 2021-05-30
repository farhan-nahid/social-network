import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../Redux/Actions/postAction";
import TodoItem from "../PostItem/PostItem";


const Post = (props) => {
  const toDos = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 className="text-center">Add Job Post</h1>
      <div className="container d-flex justify-content-center mt-5">
        <input onBlur={(e) => setValue(e.target.value)} type="text" className="form-control w-50"/>
        <button  className="btn btn-primary"  onClick={() => dispatch( createTodo({ id: Math.round(Math.random() * 500), text: value, }) )}>  Post </button>
      </div>
      <div className="text-center my-5">
        {
          toDos.map((data, i) => (<TodoItem key={i} data={data} /> ))
        }
      </div>
    </div>
  );
};


export default Post;