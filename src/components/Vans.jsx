import React from 'react'
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import b from '../assets/vans/b.jpg';
import o from '../assets/vans/o.jpg';
import u1 from '../assets/vans/u1.jpg';
import u2 from '../assets/vans/u2.jpg';

import '../styles/App.css'

const paragraphStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }

function Vans() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="animate__animated animate__fadeInUp">
        <div className="d-flex justify-content-center align-items-center text-center top">
        
        
        <Card className="bg-dark der" style={{ width: '25rem' }}>
            <Carousel className="lel">
                <Carousel.Item>
                <img src={b} alt="" className="card-img-top"/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className="text-light">Vans Botita</Card.Title>
                <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                Las Sk8-Hi de Vans son unas zapatillas ligeras, de caña alta y con cordones. Presenta amortiguación en el talón para más confort, una puntera reforzada que garantiza 
                la durabilidad y cuello acolchado para mayor sujeción y flexibilidad. Está hecha con una parte superior de lona y gamuza resistente. La distintiva suela waffle de
                caucho proporciona un agarre más firme.
                </Card.Text>
                <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Leer menos...' : 'Leer más...'}
                </Button>
            </Card.Body>
        </Card>
        
        
        <Card className="bg-dark izq der" style={{ width: '25rem' }}>
            <Carousel className="lel">
                <Carousel.Item>
                <img src={o} alt="" className="card-img-top"/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className="text-light">Vans Old</Card.Title>
                <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y
                con el correr de las décadas se transformó en un modelo básico de lifestyle. Son zapatillas de corte bajo confeccionadas con capellada resistente, tiene punteras 
                reforzadas para añadir durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado para ofrecer sujeción y confort.
                </Card.Text>
                <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Leer menos...' : 'Leer más...'}
                </Button>
            </Card.Body>
        </Card>

        <Card className="bg-dark izq der" style={{ width: '25rem' }}>
            <Carousel className="lel">
                <Carousel.Item>
                <img src={u1} alt="" className="card-img-top"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={u2} alt="" className="card-img-top"/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title className="text-light">Vans Ultra</Card.Title>
                <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                Una nueva incorporación a la familia de Vans, las UltraRange tienen el confort, agarre y ajuste que necesitas para llevar tus limites al máximo, para viajar mucho más,
                y para ir más lejos. Con una nueva suela UltraCush, tiene interior sin costuras para reducir el peso y la fricción, y suela waffle invertida para control máximo.

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

export default Vans