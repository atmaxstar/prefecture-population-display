import React from 'react'
import './style.css'

const Loading = () => {
  return (
    <div className='dialog'>
        <div className="spinner-box">
            <div className="three-quarter-spinner"/>
        </div>
    </div>
  )
}

export default Loading
