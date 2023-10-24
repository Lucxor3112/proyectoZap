import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
        <footer>
            <div className='footer'>
                <h3 className='logo'>ZAP <FontAwesomeIcon icon={faUtensils} /></h3>
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