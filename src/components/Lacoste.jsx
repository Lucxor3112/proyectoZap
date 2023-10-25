import React from 'react'
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import l1 from '../assets/lacoste/l1.jpg';
import l2 from '../assets/lacoste/l2.jpg';
import l3 from '../assets/lacoste/l3.jpg';
import l4 from '../assets/lacoste/l4.jpg';
import l5 from '../assets/lacoste/l5.jpg';
import l6 from '../assets/lacoste/l6.jpg';
import l7 from '../assets/lacoste/l7.jpg';

import '../styles/App.css'

const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

function Lacoste() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="animate__animated animate__fadeInUp">
        <div className="d-flex justify-content-center align-items-center text-center top">


<Card className="bg-dark der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={l1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={l2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={l3} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={l4} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={l5} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={l6} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={l7} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Lacoste Clip</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        Este entrenador inspirado en el archivo presenta una silueta de línea lateral tradicional y detalles destacados de los 80. Las partes superiores están construidas de 
        cuero suave, tacto napa con un acabado pigmentado. Los contrastes de ante en el talón añaden textura y se combinan con una suela de goma para mejorar el ambiente retro.
        El cocodrilo está bordado en verde característico en el cuarto y gemelos con la marca grabada en el talón para completar el estilo.
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

export default Lacoste