import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faLock, faFloppyDisk, faPenToSquare, faLockOpen } from '@fortawesome/free-solid-svg-icons'




function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState (null)
    const [value, setValue] = useState('');
    const [filteredTodos, setFilteredTodos] = useState(todo);

    function deleteTodo(id) {
        let newTodo = [...todo].filter((item) => item.id !== id)
        setTodo(newTodo)
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter((item) => 
        {if (item.id === id) {
            item.status = !item.status
        }

        return item
    
    }

        )
        setTodo(newTodo)
    }

    function editTodo (id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveTodo (id) {
        let newTodo = [...todo].map (
            item =>{
                if(item.id === id){
                    item.title = value
                }
                return item
            }
        )
        setTodo(newTodo) 
        setEdit(null)
    }

    function sortTodos (status){
      if(status === 'all'){
        setFilteredTodos(todo)
      } else {
        let newTodo = todo.filter(item => item.status === status)
        setFilteredTodos(newTodo)
      }

    }
  

    useEffect (()=>{
        setFilteredTodos(todo)  
    }, [todo])


    
    

    return(
        <div>
                <div className= {s.btn_sort}>
                    <Button className={s.btn_sort_buttons} onClick={()=> {sortTodos("all")}}>Все</Button>
                    <Button className={s.btn_sort_buttons} onClick={()=> {sortTodos(true)}}>Открытые</Button>
                    <Button className={s.btn_sort_buttons} onClick={()=> {sortTodos(false)}}>Закрытые</Button>    
                </div>
              
        
            {
                
                filteredTodos.map ((item) => (
                    
                     <div key = {item.id} className={s.listItems}>
                        {
                            edit === item.id ?

                            <div> 
                                <input 
                                onChange={(e)=> setValue(e.target.value)}
                                value={value}
                            
                                />
                                               
                            </div> : 
                            
                            <div className={ item.status ? '' : s.close }>
                                {item.title} 
                            </div>

                        }

                       {
                        edit === item.id ? 

                        <div> 
                            <Button onClick={()=> saveTodo(item.id)}> <FontAwesomeIcon icon={faFloppyDisk} /></Button> 
                        </div> :

                        <div> 
                        <Button onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                        
                        <Button onClick={() => statusTodo(item.id) } className={s.btn}>
                        { item.status?  <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} /> }
                        </Button>
                        <Button onClick={() => editTodo(item.id, item.title)} className={s.btn}><FontAwesomeIcon icon={faPenToSquare} /></Button> 
                        </div>
                       }

  
                       
                        

                     </div>
                     
                ))
                
                   
                
                
            }
        </div>
    )
}

export default TodoList;