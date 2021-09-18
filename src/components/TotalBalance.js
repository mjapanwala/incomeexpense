import React, { useEffect,useContext } from "react"
import { GlobalContext } from "../context/GlobalState"




 function TotalBalance() {
   
  const {transactions} = useContext(GlobalContext)
  const greenAmount = transactions.filter((item) => {
    return item.amount > 0
  })
  const reduceGreenAmount = greenAmount.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  },0)
  const redAmount = transactions.filter((item) => {
    return item.amount < 0
  })
  const reduceRedAmount = redAmount.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  },0)
  

  return (
    <>
      <div className="bg-white rounded flex flex-row justify-center align-center ">
         <div className="p-6">
           <h2>Income</h2>
           <h2 className="text-green-400">{reduceGreenAmount}</h2>
         </div>
         <div className="p-6 ">
           <h2 >Expense</h2>
           <h2 className="text-red-700">{reduceRedAmount} </h2>
         </div>
      </div>
    </>
  )
}
export default TotalBalance