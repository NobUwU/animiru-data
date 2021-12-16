import React from 'react'
import { useHistory } from 'react-router-dom'
import { Help } from '../assets/icons/Help'

import './Navbar.scss'

const Navbar: React.FC = () => {
  const history = useHistory()

  function push(location: string) {
    history.push(location)
  }

  return (
    <div id='navbar'>
      <div className='content'>
        <div className='nav-button home' onClick={() => push('/')}>
          <img src='logo.webp' alt='Animiru Logo' />
        </div>
        <div className='nav-button end' onClick={() => push('/about')}>
          <Help />
        </div>
      </div>
    </div>
  )
}

export default Navbar
