import React, { useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

function Balance() {



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
      <p className="text-left font-bold">Your Balance</p>
      <h2 className="text-left font-bold">{reduceGreenAmount + reduceRedAmount}</h2>
    </>
  )
}

export default Balance