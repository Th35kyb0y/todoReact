import {useState} from "react"
import "./todo.css";
const Todo =()=>{
    const [tasks, setTodo]=useState([])
    const [taskinp, setTaskinp]=useState({
        task:"",
        imgSrc:"edit.png"
    })
    function addTodo(){
        // add input box value in tasks and to map them to jsx
setTodo(...tasks, {task:taskinp.task, imgSrc:taskinp.imgSrc})
// empty input box value on add button click
setTaskinp({...taskinp, task:""})
    }

    function setTasks(e){
setTaskinp({...taskinp, task:e.target.value})
    }
    // edit task
    function editTask(){

    }
    return(
        <>
        <h1>Todo App</h1>
        <input value={taskinp.task} onChange={setTasks} type="text" name="" id=""  placeholder="Todo Task"/>
        <button onClick={addTodo}>ADD</button>
        
        {
           tasks.map((task)=>{
                return(
                    <div className="task" >
                        <p>{task.task}</p> 
                      <img  onClick={editTask} src={task.imgSrc} alt="" srcset="" />
                        </div>
                )
            })
        }
        </>
    )
}
export default Todo;