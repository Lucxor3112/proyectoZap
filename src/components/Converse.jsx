import React from 'react'
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import b1 from '../assets/converse/b1.jpg';
import b2 from '../assets/converse/b2.jpg';
import c1 from '../assets/converse/c1.jpg';
import c2 from '../assets/converse/c2.jpg';
import '../styles/App.css'

const paragraphStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }
  

function Converse() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="animate__animated animate__fadeInUp">
        <div className="d-flex justify-content-center align-items-center text-center top">
        
        
        <Card className="bg-dark der" style={{ width: '25rem' }}>
            <Carousel className="lel">
                <Carousel.Item>
                <img src={b1} alt="" className="card-img-top"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={b2} alt="" className="card-img-top"/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className="text-light">Converse Botita</Card.Title>
                <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                Para un estilo en el que puedas confiar, las zapatillas Chuck Taylor All Star son un elemento básico de la moda. Las icónicas siluetas de caña alta y baja se 
                mantienen fieles al legado. Esta es la opción que combina con todo, que no te vas a cansar.
                </Card.Text>
                <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Leer menos...' : 'Leer más...'}
                </Button>
            </Card.Body>
        </Card>
        
        
        <Card className="bg-dark izq der" style={{ width: '25rem' }}>
            <Carousel className="lel">
                <Carousel.Item>
                <img src={c1} alt="" className="card-img-top"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={c2} alt="" className="card-img-top"/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className="text-light">Converse Premium</Card.Title>
                <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                Plantilla Lunarlon que ofrece mejor amortiguación y apoyo. Lengüeta acolchada y antideslizante para una comodidad de 360 grados en el tobillo y la zona de tensión.
                Parche tejido conciso y distintivo con bordado en la zona media. Ojales troquelados preformados para un ajuste cómodo.
                </Card.Text>
                <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Leer menos...' : 'Leer más...'}
                </Button>
            </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Converse