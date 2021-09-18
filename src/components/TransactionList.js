import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState"
function TransactionList() {
  const [hover, showHover] = useState(false)
  const {transactions, deleteTransaction} = useContext(GlobalContext)

  const handleMouseEnter = (itemId) => {
    showHover(itemId)
  }
  


  const handleDelete = (itemId) => {
    deleteTransaction(itemId)
  }
  return (
    <>
       {transactions.map((item, index) => ( 
        <>
     <div className="bg-white w-full mt-3 group"   onMouseEnter={() =>handleMouseEnter(item.id)}>

              {hover === item.id&&<svg onClick={() => handleDelete(item.id)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>}
                <div className=" w-5/12 text-left inline-block group-hover:text-red-900">{item.text}:</div>
                <div className=" w-5/12 text-right inline-block group-hover:text-red-500">{item.amount}</div>
              </div>
        </>
      ))} 
    </>
  );
}

export default TransactionList;
