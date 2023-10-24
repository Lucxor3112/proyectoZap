import React from 'react'
import adidas from '../../public/img/adidas.png'
import nike from '../../public/img/nike.png'
import jordan from '../../public/img/jordan.png'
import vans from '../../public/img/vans.png'
import converse from '../../public/img/converse.png'
import lacoste from '../../public/img/lacoste.png'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <div className='main'>
                <h1>Productos</h1>
                <div className='logos'>
                    <div className='adidas'>
                        <Link to='/adidas'><img src={adidas} alt=""/></Link>
                    </div>
                    <div className='converse'>
                        <Link to='/converse'><img src={converse} alt="" /></Link>
                    </div>
                    <div className='jordan'>
                        <Link to='/jordan'><img src={jordan} alt="" /></Link>                    
                    </div>
                    <div className='vans'>
                        <Link to='/vans'><img src={vans} alt="" /></Link>                    
                    </div>
                    <div className='nike'>
                        <Link to='/nike'><img src={nike} alt="" /></Link>                    
                    </div>
                    <div className='lacoste'>
                        <Link to='/lacoste'><img src={lacoste} alt="" /></Link>   
                    </div>
                </div>
        </div>
    </>
  )
}

export default Main