import {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState(
    getFromLocalStorage()
  )


  function getFromLocalStorage () {
    let list = localStorage.getItem('list')
    console.log(list);
    if(list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}


  useEffect(() => {
        
    localStorage.setItem('list', JSON.stringify(todo) )
   
}, [todo])
  

  return (
    <Container className='dancing-script-container'>
      <Header/>
      <AddTodo todo= {todo} setTodo = {setTodo}/>
      <TodoList todo= {todo} setTodo= {setTodo}/>

    </Container>
  );
}

export default App;
