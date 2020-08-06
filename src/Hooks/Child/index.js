import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

function Child(props) {
  const { str } = props;
  const [num, setNum] = useState(0)
  
  useEffect(() => {
    console.log('hooks child - useEffect', num)
  }, [num])

  const handleChangeStateChild = () => {
    setNum(Math.random())
  }
  
  return (
    <div>
      Child -> 
      <button className="btn btn-primary" onClick={handleChangeStateChild}>
        Change state child
      </button>
      {str}
    </div>
  )
}

Child.propTypes = {

}

export default Child

