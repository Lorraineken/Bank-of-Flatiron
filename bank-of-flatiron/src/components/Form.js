import React , {useState}from "react";

function Form(){

    const[date,setDate] = useState("2023-01-01")
    const[description,setDescription] = useState("paid for rent")
    const [category, setCategory] = useState("Housing")
    const [amount, setAmount] = useState(500)

 function handleDateChange(){}

return (
    <div>
    <form >
    <h4 >Add Transaction</h4>
    <label htmlFor="Date">DATE</label>
    <input type="text"  />
    <label htmlFor="Description">DESCRIPTION</label>
    <input type="text"  />
    <label htmlFor="Category">CATEGORY</label>
    <input type="text"  />
    <label htmlFor="Amount">AMOUNT</label>
    <input type="text"  />
   
    <button type="submit">submit Transaction</button>
  </form>
    </div>
)

}


export default Form