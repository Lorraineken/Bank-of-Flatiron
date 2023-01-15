import React, {useState, useEffect} from "react";
import 

function Transactions(){

  const[transaction, setTransaction] = useState([])

  fetch("http://localhost:3000/transactions")
  .then((response) => response.json)
  

    return(
    <div>
        
    </div>
    )
}

export default Transactions