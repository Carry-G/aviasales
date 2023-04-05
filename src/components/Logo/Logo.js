import React from 'react'

import logo from './Logo.svg'
import './Logo.css'

const Logo = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo
