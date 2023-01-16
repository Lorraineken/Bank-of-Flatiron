import React, {useState, useEffect} from "react";



function Transactions(){


    const [transData, setData] = useState([])


        useEffect(()=>{
            fetch("http://localhost:3000/transactions")
            .then((response)=> response.json())
            .then((data)=> 
            {    
            //const displayData =data.transactions
            const displayData =data
               return setData(displayData)
            }  ) },[])

        const newArray =transData.map((item)=> {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                </tr>
            )
        
        })
    

    return(
         <tbody className="">
              <tr>
                <th>id</th>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                 <th>Amount</th>
            </tr>
             {newArray} 
        </tbody>
    )

}



export default Transactions;