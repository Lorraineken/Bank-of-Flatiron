import React from "react"
import './App.css';
import "./bootstrap.css"
import Transactions from "./Transactions"
import Form from "./Form";
import SearchBar from "./SearchBar";

function App() {
  

  return (
    <div >  
      <SearchBar/>
    <Transactions />
    <Form />
    </div>
  );
}

export default App;
