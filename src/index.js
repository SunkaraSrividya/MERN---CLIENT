//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './Component/Login';
//import Register from './Component/Register';
//import ToDoList from './Component/TodoList';
//import Home from './Component/home';  // Assuming you have a Home component

//const logoutcd = () => {
  // Define your logout functionality here
//};

//ReactDOM.render(
  //<React.StrictMode>
    //<Router>
      //<Routes>
        //<Route path="/" element={<Home />} />
        //<Route path="/login" element={<Login />} />
        //<Route path="/register" element={<Register />} />
        //{/* <Route path="/products" element={<Products />} /> */}
      //</Routes>
    //</Router>
  //</React.StrictMode>,
  //document.getElementById('root')
//);
//
import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
