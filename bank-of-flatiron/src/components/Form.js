import React , {useEffect, useState}from "react";
import "./bootstrap.css"

function Form(){

    const[date,setDate] = useState("2023-01-01")
    const[description,setDescription] = useState("paid for rent")
    const [category, setCategory] = useState("Housing")
    const [amount, setAmount] = useState(500)
    const [submittedData, setSubmittedData] = useState([]);
    const [errors,setErrors] = useState([])

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
 function handleSubmit(event){
   //event.preventDefault()
    
   if (date.length>0 && amount.length>0 && category.length>0){
    const formData ={
        date : date,
        description : description,
        category : category,
        amount : amount
    };
    
    const configurationObject ={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
        },
        body: JSON.stringify(formData)
    }

    fetch("http://localhost:3000/transactions",configurationObject)

    const dataArray = [...submittedData,formData]
    console.log(dataArray)
    setSubmittedData(dataArray);
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
    setErrors([]);
  
   }
   else{
    setErrors(["There is a missing input!"])
   }
 }

return (
    <div>
    <form onSubmit={handleSubmit}>
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

   {/* conditionally render error messages */}
   {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    </div>
)

}


export default Form