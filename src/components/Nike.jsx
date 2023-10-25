import React from 'react'
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import af1 from '../assets/nike/airforce1/af1.jpg';
import af2 from '../assets/nike/airforce1/af2.jpg';
import af3 from '../assets/nike/airforce1/af3.jpg';
import af4 from '../assets/nike/airforce1/af4.jpg';
import b1 from '../assets/nike/botin/b1.jpg';
import b2 from '../assets/nike/botin/b2.jpg';
import b3 from '../assets/nike/botin/b3.jpg';
import f1 from '../assets/nike/futsal/f1.jpg';
import f2 from '../assets/nike/futsal/f2.jpg';
import f3 from '../assets/nike/futsal/f3.jpg';
import f4 from '../assets/nike/futsal/f4.jpg';
import f5 from '../assets/nike/futsal/f5.jpg';
import f6 from '../assets/nike/futsal/f6.jpg';
import h1 from '../assets/nike/harvard/h1.jpg';
import h2 from '../assets/nike/harvard/h2.jpg';
import h3 from '../assets/nike/harvard/h3.jpg';
import h4 from '../assets/nike/harvard/h4.jpg';
import h5 from '../assets/nike/harvard/h5.jpg';
import h6 from '../assets/nike/harvard/h6.jpg';
import h7 from '../assets/nike/harvard/h7.jpg';
import h8 from '../assets/nike/harvard/h8.jpg';
import h9 from '../assets/nike/harvard/h9.jpg';
import h10 from '../assets/nike/harvard/h10.jpg';
import h11 from '../assets/nike/harvard/h11.jpg';
import h12 from '../assets/nike/harvard/h12.jpg';
import h13 from '../assets/nike/harvard/h13.jpg';
import p1 from '../assets/nike/phantom/p1.jpg';
import p2 from '../assets/nike/phantom/p2.jpg';
import sb1 from '../assets/nike/sblow/sb1.jpg';
import sb2 from '../assets/nike/sblow/sb2.jpg';
import sb3 from '../assets/nike/sblow/sb3.jpg';
import sb4 from '../assets/nike/sblow/sb4.jpg';
import sb5 from '../assets/nike/sblow/sb5.jpg';
import sb6 from '../assets/nike/sblow/sb6.jpg';
import sb7 from '../assets/nike/sblow/sb7.jpg';

import '../styles/App.css'

const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

function Nike() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="animate__animated animate__fadeInUp"> 
        <div className="d-flex justify-content-center align-items-center text-center top">


<Card className="bg-dark der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={af1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={af2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={af3} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={af4} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Nike Air Force One</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        El fulgor sigue vivo en las Nike Air Force 1 '07, un modelo original de baloncesto que introduce un nuevo giro a sus ya característicos revestimientos con costuras 
duraderas, sus acabados impecables y la cantidad perfecta de reflectante.
        </Card.Text>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Leer menos...' : 'Leer más...'}
        </Button>
      </Card.Body>
  </Card>


  <Card className="bg-dark izq der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={b1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={b2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={b3} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Botines Nike</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        Los botines Nike están confeccionados en suede con costuras que evitan que el material ceda y logre una mayor resistencia, además de ofrecer 
        flexibilidad y ligereza. La suela lisa de goma non-marking no daña el terreno de juego, lo que los hace ideales para fútbol sala indoor y outdoor. Su diseño se 
        inspira en la campaña Joga Bonito de 2006 que nos recordó a todos jugar por amor al deporte con dignidad y espíritu.
        </Card.Text>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Leer menos...' : 'Leer más...'}
        </Button>
      </Card.Body>
  </Card>


  <Card className="bg-dark izq der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={f1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={f2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={f3} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={f4} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={f5} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={f6} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Nike Futsal</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        Nike sigue apostando con fuerza por las zapatillas de fútbol sala.
        La revolucionaria colección NikeFootballX llega con fuerza a las pistas
        de futsal de todo el mundo. MercurialX, MagistaX, HypervenomX y ahora 
        también las TiempoX son los silos de producto, donde la marca americana
        ha volcado toda la tecnología previamente aplicada al fútbol. 
        Jugadores de la talla de Ricardinho, Cardinal, Mario Rivillos, Bateria, 
        Ferrao o Saad confían en esta marca.
        </Card.Text>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Leer menos...' : 'Leer más...'}
        </Button>
      </Card.Body>
  </Card>
</div>
<div className="d-flex justify-content-center align-items-center text-center top">
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
        <Carousel.Item>
        <img src={h5} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h6} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h7} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h8} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h9} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h10} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h11} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h12} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={h13} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Nike Air Force Harvard</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        La luminosidad sigue viva con este calzado de básquetbol original. Al combinar la comodidad para la 
        cancha con el estilo para usar fuera de ella, le da un giro nuevo a lo que mejor conoces: la confección inspirada en los años 80,
        los detalles audaces y nada más que el estilo de básquetbol.
        </Card.Text>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Leer menos...' : 'Leer más...'}
        </Button>
      </Card.Body>
  </Card>


  <Card className="bg-dark izq der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={p1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={p2} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Nike Phantom</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        ¿Te obsesiona perfeccionar tu arte? 
        Diseñamos el calzado Elite para ti y para las estrellas 
        más grandes del mundo, para así poder brindarte calidad 
        de alto nivel, porque exiges lo mejor de ti mismo y de tu 
        calzado también. Confeccionado con el revolucionario Nike 
        Gripknit, este calzado proporciona un mejor toque del balón 
        con un diseño intuitivo que ayuda a mejorar tu precisión tanto 
        al hacer tiros como en un control cercano. Esta versión cuenta 
        con un cuello Dynamic Fit, que envuelve el tobillo
        en una tela suave y elástica para brindar una sensación de seguridad.
        </Card.Text>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Leer menos...' : 'Leer más...'}
        </Button>
      </Card.Body>
  </Card>    


  <Card className="bg-dark izq der" style={{ width: '25rem' }}>
      <Carousel className="lel">
        <Carousel.Item>
        <img src={sb1} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={sb2} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={sb3} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={sb4} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={sb5} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={sb6} alt="" className="card-img-top"/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={sb7} alt="" className="card-img-top"/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title className="text-light">Nike SB Low</Card.Title>
        <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
        Las Nike Dunk Low son unas zapatillas casual que se inspiran en modelos deportivos pero que destacan por su comodidad. Su diseño se basa en la clásica deportiva de 
        baloncesto que Nike lanzó en 1985. Destacan por su durabilidad, gracias a un upper o parte superior de piel sintética y una buena amortiguación que te harán sentir 
        un confort increíble.
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

export default Nike