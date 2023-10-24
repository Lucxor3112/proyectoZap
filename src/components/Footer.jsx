import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
        <footer>
            <div className='footer'>
                <h3 className='logo'>Z<FontAwesomeIcon icon={faBolt}/>P</h3>
                <p className='copyright'>Copyright© 2023 ZAP, Inc</p>
                <div className='detalle'>
                    <a href="#">Informacion legal</a>
                    <a href="#">Politica de privacidad</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer