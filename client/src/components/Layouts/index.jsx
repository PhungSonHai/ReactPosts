import React from 'react'
import Header from './../Header'

function index({ children }) {
  return (
    <React.Fragment>
      <div className='d-flex flex-column vh-100'>
        <Header />
        {children}
      </div>
    </React.Fragment>
  )
}

export default index
