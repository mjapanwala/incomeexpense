import React, { useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

function HistoryTitle(props) {
  const {transactions} = useContext(GlobalContext)
 
  return (
    <>
      <h2 className="text-left underline mt-4 ">History</h2>
    </>
  )
}

export default HistoryTitle