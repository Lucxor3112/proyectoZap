import React from 'react';
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import r1 from '../assets/jordan/retro/r1.jpg';
import r2 from '../assets/jordan/retro/r2.jpg';
import r3 from '../assets/jordan/retro/r3.jpg';
import h1 from '../assets/jordan/high/h1.jpg';
import h2 from '../assets/jordan/high/h2.jpg';
import h3 from '../assets/jordan/high/h3.jpg';
import h4 from '../assets/jordan/high/h4.jpg';

import '../styles/App.css'

const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

function Jordan() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="animate__animated animate__fadeInUp">
<div className="d-flex justify-content-center align-items-center text-center top">


<Card className="bg-dark der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={r1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={r2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={r3} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Jordan Retro</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        Está hecha con una tela canvas de color negro y presenta una parte superior de cuero para un acabado suave y una sensación de lujo.

        </Card.Text>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Leer menos...' : 'Leer más...'}
        </Button>
      </Card.Body>
  </Card>


  <Card className="bg-dark izq der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={h1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h3} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h4} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Jordan High</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        Un diseño atractivo y retro, unido a una comodidad premium. Así son las nuevas zapatillas Nike Air Jordan 1 Retro High para el público masculino. Un modelo renovado 
        que incorpora detalles icónicos del mundo del baloncesto, conservado al mismo tiempo el confort y la ligereza que tan populares hicieron al modelo antecesor.
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

export default Jordan