import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../Redux/Actions/postAction";

const PostItem = ({data}) => {
    const { id, text } = data || "";
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState(text);
    const dispatch = useDispatch();

    const handleUpdate = () => {
      setUpdate(!update);
      const data = {
        id: id,
        updateValue: value,
      };
      if (data.updateValue) {
        dispatch(updateTodo(data));
      }
    };
  
    const handleUpdateValue = (e) => {
      setValue(e.target.value);
    };
    return (
        <div className="my-5 p-3" style={{border:'1px solid gray'}}>
      <div>
           {update ? (
          <input  type="text" defaultValue={text} className="d-block mx-auto my-3" onChange={(e) => handleUpdateValue(e)} />  )
           : (
          <p>{text} </p>
          
        )}
               <button className="btn btn-success" onClick={() => handleUpdate()}>{update ? "done" : "update"} </button>
        <button  className="btn btn-danger mx-2" onClick={() => dispatch(deleteTodo(id))} > Delete </button>
      </div>
    </div>
    );
};

export default PostItem;