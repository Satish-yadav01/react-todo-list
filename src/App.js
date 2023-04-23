import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import { useState,useEffect } from 'react';
import AddTodo from './components/AddTodo';


function App() {
  // let initTodos = [
  //   {
  //     id : 1,
  //     task : "visiting college",
  //     desc : "visiting college on monday"
  //   },
  //   {
  //     id : 2,
  //     task : "extracting data",
  //     desc : "extracting data at midnight (office work)"
  //   },
  // ];

  let initTodos;
  if(localStorage.getItem("todos") === null){
    initTodos = [];
  }else{
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  let [todos,setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  let addTodo = (task, desc) =>{
    // console.log('Adding task')
    let id = 0;
    if(todos.length == 0){
      id = 0
    }else{
      id = todos[todos.length-1].id + 1;
    }
    
    let newTask = {
      id : id,
      task : task,
      desc : desc
    };

    setTodos([...todos,newTask ])
  }

  const onDelete = (todo)=>{
    console.log("ondelete functon called")

    setTodos(todos.filter((e)=>{
      return e !== todo
    }));
    console.log("deleted", todos)
  }

  

  return (
    <>
    <Header/>
    <AddTodo addTodo={addTodo}/>
    <Home todos={todos} onDelete={onDelete}/>
    <Footer/>

      {/* <Router>
        <Header/>
        <Routes>
          <Route path="/about"><About /></Route>
          <Route path="/"><Home /></Route>
        </Routes>
        <Footer/>
      </Router> */}
    </>
  );
}

export default App;
