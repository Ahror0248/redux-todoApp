import {connect} from 'react-redux'
import ToDo from './todo'


function TaskList({todos}){
  return(
      <div>
        {
          todos.map((item) => <ToDo item={item} key={item.id} />)
           
          }
      </div>
  )
}

const mapStateToProps = ({todos})=>({todos: todos})


export default connect(({todos})=>({todos: todos}))(TaskList) 