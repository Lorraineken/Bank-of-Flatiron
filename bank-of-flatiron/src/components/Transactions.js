import React, {useState, useEffect} from "react";



function Transactions(){


    const [transData, setData] = useState([])


        useEffect(()=>{
            fetch("https://lorraineken.github.io/server/bank-of-flatiron.json")
            .then((response)=> response.json())
            .then((data)=> 
            {    
            const displayData =data.transactions
               return setData(displayData)
            }  ) },[])

        const newArray =transData.map((item)=> {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                </tr>
            )
        
        })
    

    return(
        <div>
            <table>
                    <tr>
                        <th>id</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                    {newArray}
                </table>
            
        </div>
    )

}



export default Transactions;