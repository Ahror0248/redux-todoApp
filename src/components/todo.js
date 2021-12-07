import { toggleTodo } from "../redux/action";
import { connect } from "react-redux";


function ToDo({ item, toggleTodo }) {
  return (
    <div key={item.id} className={"row"}>
      <div className="col-md-2 my-auto">
        <input type="checkbox" checked={item.completed} onChange={()=> toggleTodo(item.id)} id={'check/' +item.id} className={'checkbox'} />
      </div>
      <div className="col-md-10">
        <label className={'label'} htmlFor={'check/' +item.id}>{item.title}</label>
      </div>
    </div>
  );
}

export default connect(null, {toggleTodo}) (ToDo);
