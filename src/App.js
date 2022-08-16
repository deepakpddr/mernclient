import React, { createContext, useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ErrorPage from "./Components/ErrorPage";
import Logout from "./Components/Logout";
import { Routes, Route, BrowserRouter} from "react-router-dom";

import { intialState, reducer } from "./reducer/UseReducer";

const userContext = createContext();
const Routing = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
    <userContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Routing />
      </userContext.Provider>
    </>
  )
}

export default App;