import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
function AddNewTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const {addTransaction} = useContext(GlobalContext)
const handleSubmit = (e) => {
  e.preventDefault()
   const newTransaction = {
     id: Math.floor(Math.random() * 1000),
     text,
     amount: +amount
   }
   addTransaction(newTransaction)
   setText('')
   setAmount('')
}

  return (
    <>
      <h3 className="font-bold text-left underline m-4">Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text" name="text" className="block w-full text-left p-2">Text</label>
        <input value={text} onChange={(e) => {setText(e.target.value)}} className="block w-full text-left p-2" type="text" id="text" name="text" placeholder="Enter text..."/>
        <label className="block w-full text-left p-2" htmlFor="amount" name="amount">Amount<span className="block text-left">(negative-expense, positive-income)</span></label>
        <input value={amount} onChange={(e) => {setAmount(e.target.value)}} type="text" id="amount" name="amount" className="block w-full text-left p-2" placeholder="Enter amount..."/>
        <button className="bg-purple-400 w-full text-white mt-4">Add transaction</button>
      </form>
    </>
  )
}

export default AddNewTransaction