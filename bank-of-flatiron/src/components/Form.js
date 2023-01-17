import React , {useState}from "react";

function Form(){

    const[date,setDate] = useState("2023-01-01")
    const[description,setDescription] = useState("paid for rent")
    const [category, setCategory] = useState("Housing")
    const [amount, setAmount] = useState(500)

 function handleDateChange(event){
    setDate(event.target.value)
 }
 function handleDescriptionChange(event){
    setDescription(event.target.value)
 }
 function handleCategoryChange(event){
    setCategory(event.target.value)
 }
 function handleAmountChange(event){
    setAmount(event.target.value)
 }

return (
    <div>
    <form >
    <h4 >Add Transaction</h4>
    <label htmlFor="Date">DATE</label>
    <input type="text" onChange={handleDateChange} value={date}/>
    <label htmlFor="Description">DESCRIPTION</label>
    <input type="text" onChange={handleDescriptionChange} value={description} />
    <label htmlFor="Category">CATEGORY</label>
    <input type="text" onChange={handleCategoryChange} value={category}  />
    <label htmlFor="Amount">AMOUNT</label>
    <input type="text" onChange={handleAmountChange} value={amount}  />
   
    <button type="submit">submit Transaction</button>
  </form>
    </div>
)

}


export default Form