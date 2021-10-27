import React, { useState } from "react";
import Input from "./input/Input";
import Contacts from "./contactList/Contacts";
import Edit from "./Edit/Edit";
// import Routes from "./Routes";


function App() {
  const [todos, setTodos] = useState([])
  function addTask(task) {
    let todosArr = [...todos, task]
    setTodos(todosArr)
  }

  function deleteTask(id) {
    let newArr = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(newArr)
  }
  return (
    <>
      <Input addTask={addTask} />
      <Contacts todos={todos} deleteTask={deleteTask} />
      <Edit />
    </ >
  )

}

export default App;
