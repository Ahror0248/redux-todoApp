import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/action";

function AddTask({addTodo}) {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className={"row"}>
      <div className="col-md-10">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className={"form-control"}
        />
      </div>
      <div className="col-md-2">
        <button className={"btn btn-dark"} onClick={()=>inputVal && addTodo(inputVal)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default connect(null, {addTodo})(AddTask);
