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
      <h1 className="text-center">Add Social Work</h1>
      <div className="container d-flex justify-content-center mt-5">
        <input onBlur={(e) => setValue(e.target.value)} type="text" className="form-control w-50" />
        <button className="btn btn-primary" onClick={() => dispatch(createTodo({ id: Math.round(Math.random() * 500), text: value, }))}>  Post </button>
      </div>
      <div className="text-center my-5">
        {
          toDos.map((data, i) => (<TodoItem key={i} data={data} />))
        }
      </div>
      <div className="text-center my-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE3S3-oP7XRB7OZmo656ReOY930HJT2_Fgg&usqp=CAU" alt="" />
        <h1> Programmer says...</h1>
      </div>
      <div className="text-center my-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE3S3-oP7XRB7OZmo656ReOY930HJT2_Fgg&usqp=CAU" alt="" />
        <h1> Programmer says...</h1>
      </div>
    </div>
  );
};


export default Post;