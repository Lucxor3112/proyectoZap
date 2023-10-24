import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h1>ZAP</h1>
        </div>
        <div className='buy'>
          <a href="https://api.whatsapp.com/send?phone=543865442380&text=Quiero comprarte unas zapatillas que vi en la pagina!">  
              <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
    </div>
  )
}

export default Header