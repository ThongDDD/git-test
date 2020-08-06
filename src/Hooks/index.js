import React, { useEffect, useState } from 'react'
import Child from './Child'

function Hooks() {
  const [str, serStr] = useState('')
  const [str1, setStr1] = useState('')
    
  useEffect(() => {
    console.log('hooks parent - useEffect', str)
  }, [str])

  const handleChangeState = () => {
    setStr1(Math.random())
  }

  return (
    <div className="container">
      Parent ->
      <button className="btn btn-success" onClick={handleChangeState}>
        Change state
      </button>
      <Child str={str1} />
    </div>
  )
}

export default Hooks
