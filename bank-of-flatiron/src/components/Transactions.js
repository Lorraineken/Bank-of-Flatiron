import React, {useState, useEffect} from "react";
import "./App.css"


function Transactions(){


    const [transData, setData] = useState([])
    const [searchInput, setSearchInput] = useState()

    

        useEffect(()=>{
            fetch("http://localhost:3000/transactions")
            .then((response)=> response.json())
            .then((data)=> 
            {    
            //const displayData =data.transactions
            const displayData =data
               return setData(displayData)
            }  ) },[])

            function handleSearchChange(e){
                setSearchInput(e.target.value)
               }

        const newArray =(transData.map((item)=> {
            return (
                <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                </tr>
            )
        
        }))

        const filterData =transData.filter((data) => data.description.includes(searchInput))

        const filteredArray=filterData.map((item) => {
            return(
             <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
            </tr>
            )
        })
        
    
        const displayTable=(
            <tbody className="table-render">
              <tr>
                <th >Date</th>
                <th >Description</th>
                <th >Category</th>
                 <th >Amount</th>
            </tr>
             {newArray} 
        </tbody>
        )


   

    return(
         <React.Fragment>
         <input type="text" placeholder="Search Here"  onChange={handleSearchChange} value={searchInput} />
         <button >Search</button>
            {displayTable}
         </React.Fragment>
    )

}



export default Transactions;