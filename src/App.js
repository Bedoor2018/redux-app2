import './App.css';
import {onAddTodo,onShowAll,onShowCompleted} from './actions/index';
import {useSelector,useDispatch} from 'react-redux';
import Task from './components/Task';

export default function App() {
const value=useSelector((state)=>state)
console.log(value,'state in value')
const despatch=useDispatch();

  return (
   <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card card-white">
        <div className="card-body">
          <form>
            <input type="text" className="form-control add-task" placeholder="New Task..." 

          onKeyPress={(e) => {
            if (e.key === "Enter"){
            e.preventDefault();
              despatch(onAddTodo(e.target.value))
            }
        }
      } />
          </form>
          <ul className="nav nav-pills todo-nav">
        <li  key="All" role="presentation" className="nav-item all-task active"><button onClick={()=>{despatch(onShowAll())}} className="nav-link">All</button></li>
            <li key="Completed" role="presentation" className="nav-item completed-task"><button className="nav-link" onClick={()=>{despatch(onShowCompleted())}}>Completed</button></li>
          </ul>
          <div className="todo-list">
{
value.map((e) =>{
return <Task name={e.task} />
})
}
       </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
