import React from "react";

function Form(){

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