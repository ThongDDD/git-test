import React, { useEffect, useState } from 'react'
import Child from './Child'

function Hooks() {
  const [str, serStr] = useState('')
  
  useEffect(() => {
    console.log('hooks parent - useEffect')
  }, [])
    
  useEffect(() => {
    console.log('hooks parent - useEffect - updated', str)
  }, [str])

  const handleChangeState = () => {
    serStr(Math.random())
  }

  return (
    <div className="container">
      Parent ->
      <button className="btn btn-success" onClick={handleChangeState}>
        Change state
      </button>
      <Child str={str} />
    </div>
  )
}

export default Hooks
