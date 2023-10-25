import React from 'react'
import {useRef, useEffect, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import adidasub1 from '../assets/adidas/ultraboost/adidasub1.jpg';
import adidasub2 from '../assets/adidas/ultraboost/adidasub2.jpg';
import adidasub3 from '../assets/adidas/ultraboost/adidasub3.jpg';
import adidasub4 from '../assets/adidas/ultraboost/adidasub4.jpg';
import adidasub5 from '../assets/adidas/ultraboost/adidasub5.jpg';
import fl1 from '../assets/adidas/forumlow/fl1.jpg';
import fl2 from '../assets/adidas/forumlow/fl2.jpg';
import fl3 from '../assets/adidas/forumlow/fl3.jpg';
import fl4 from '../assets/adidas/forumlow/fl4.jpg';
import fl5 from '../assets/adidas/forumlow/fl5.jpg';
import fl6 from '../assets/adidas/forumlow/fl6.jpg';
import fl7 from '../assets/adidas/forumlow/fl7.jpg';
import fl8 from '../assets/adidas/forumlow/fl8.jpg';
import f1 from '../assets/adidas/forum1/f1.jpg';
import f2 from '../assets/adidas/forum1/f2.jpg';
import f3 from '../assets/adidas/forum1/f3.jpg';
import bcampus from '../assets/adidas/badcampus/bcampus.jpg';
import y1 from '../assets/adidas/yeezy/y1.jpg';
import y2 from '../assets/adidas/yeezy/y2.jpg';
import y3 from '../assets/adidas/yeezy/y3.jpg';
import y4 from '../assets/adidas/yeezy/y4.jpg';
import sply1 from '../assets/adidas/ysply/sply1.jpg';
import sply2 from '../assets/adidas/ysply/sply2.jpg';
import sply3 from '../assets/adidas/ysply/sply3.jpg';
import '../styles/App.css'

const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

function Adidas() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <div className="d-flex justify-content-center align-items-center text-center top">
          <Card className="bg-dark der" style={{ width: '25rem' }}>
                <Carousel className="lel">
                  <Carousel.Item>
                  <img src={adidasub1} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={adidasub2} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={adidasub3} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={adidasub4} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={adidasub5} alt="" className="card-img-top"/>
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="text-light">Adidas UltraBoost</Card.Title>
                  <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                    ¡BOOST cumple 10! Después de una década de corredores 
                    energizantes en todo el mundo, estamos innovando con unas zapatillas aún más ligeras: las Ultraboost Light. 
                    Descubrí una energía épica con las nuevas Ultraboost Light, las Ultraboost más ligeras que hemos creado. La magia está en la mediasuela Light BOOST, una nueva 
                    generación de adidas BOOST.
                  </Card.Text>
                  <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Leer menos...' : 'Leer más...'}
                  </Button>
                </Card.Body>
            </Card>


            <Card className="bg-dark izq der" style={{ width: '25rem' }}>
                <Carousel className="lel">
                  <Carousel.Item>
                  <img src={fl1} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl2} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl3} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl4} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl5} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl6} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl7} alt="" className="card-img-top"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src={fl8} alt="" className="card-img-top"/>
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="text-light">Adidas Forum Low</Card.Title>
                  <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                  Revive los campeonatos de verano durante todo el año.
                  <span>
                  Creadas para las canchas de básquet, las zapatillas Forum de adidas se han convertido en el calzado preferido 
                  de músicos, artistas y otros referentes del mundo de la moda. Esta llamativa renovación pone de relieve su naturaleza icónica. El distintivo panel en X y las 3 Tiras 
                  dentadas resaltan con colores en contraste para un look clásico y moderno al mismo tiempo.
                  </span>
                  </Card.Text>
                  <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Leer menos...' : 'Leer más...'}
                  </Button>
                </Card.Body>
            </Card>


            <Card className="bg-dark izq" style={{ width: '25rem' }}>
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
                </Carousel>
                <Card.Body>
                  <Card.Title className="text-light">Adidas Forum One 1</Card.Title>
                  <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
                  Más que un calzado, es una declaración de estilo. Las 
                  <span>
                  adidas Forum llegaron a la escena en el 84 y ganaron seguidores en la cancha y en el mundo de la música.
                  </span>
                  </Card.Text>
                  <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Leer menos...' : 'Leer más...'}
                  </Button>
                </Card.Body>
            </Card>
        </div>
    <div className="d-flex justify-content-center align-items-center text-center top">
    <Card className="bg-dark der" style={{ width: '25rem' }}>
          <Carousel className="lel">
            <Carousel.Item>
            <img src={bcampus} alt="" className="card-img-top"/>
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title className="text-light">Adidas Bad Campus</Card.Title>
            <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
            Sé el primero en valorar “ADIDAS CAMPUS BLACK BAD BUNNY”
            </Card.Text>
            <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Leer menos...' : 'Leer más...'}
            </Button>
          </Card.Body>
    </Card>


    <Card className="bg-dark izq der" style={{ width: '25rem' }}>
          <Carousel className="lel">
            <Carousel.Item>
            <img src={y1} alt="" className="card-img-top"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={y2} alt="" className="card-img-top"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={y3} alt="" className="card-img-top"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={y4} alt="" className="card-img-top"/>
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title className="text-light">Adidas Yeezy</Card.Title>
            <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
            Los zapatos adidas Yeezy de Kanye West son actualmente la joya de la corona de la colección de calzado adidas Pero los estilos clásicos de adidas como adidas Superstar, adidas Samba y adidas Stan Smith, por nombrar solo algunos, son tan clásicos como cualquier zapato disponible en el mundo. Otras celebridades como Pharrell Williams, Jonah Hill y diseñadores de moda como Nigo, Rick Owens, Raf Simons y muchos más han colaborado con las combinaciones de colores para el futuro de la colección de colores. Los Yeezys más buscados son el Speryezy Boost 350 V2, el Yeezy 500, el tablet Yeezy Boost 700, el tapete Yeezy Foam Runner y el Yeezy Slide. Cada uno aporta un aspecto progresivo con comodidad de alto nivel, incluyendo amortiguación Boost en el Yeezy 350 V2, Yeezy 700 y otras variaciones de Yeezy. Una de las marcas de calzado deportivo más antiguas, se celebra en todo el mundo por tener diseños innovadores y elegantes para cualquier deporte y estilo de vida que puedas imaginar. En caso de duda, solo busque la "Marca con las Tres Rayas"
            </Card.Text>
            <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Leer menos...' : 'Leer más...'}
            </Button>
          </Card.Body>
      </Card>

      <Card className="bg-dark izq" style={{ width: '25rem' }}>
          <Carousel className="lel">
            <Carousel.Item>
            <img src={sply1} alt="" className="card-img-top"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={sply2} alt="" className="card-img-top"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={sply3} alt="" className="card-img-top"/>
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title className="text-light">Adidas Yeezy Sply</Card.Title>
            <Card.Text className="text-secondary" style={isOpen ? null : paragraphStyles}> 
            Con su nombre proveniente de las similitudes de colores que se encuentran en el primer Yeezy Boost 350 V2, el Yeezy Boost 350 V2 'Beluga 2.0' se lanzó el 25 de 
            noviembre de 2017. Se reabasteció rápidamente el 30 de noviembre después de agotarse. El zapato presenta una raya gris apagada en los laterales en lugar de la raya 
            naranja brillante que se encuentra en la zapatilla original 'Beluga'. El Yeezy Boost 350 V2 'Beluga 2.0' también cuenta con una lengüeta para tirar del talón con 
            costuras naranjas y letras naranjas 'SPLY-350' al revés en los laterales.
            </Card.Text>
            <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Leer menos...' : 'Leer más...'}
            </Button>
          </Card.Body>
      </Card> 
    </div>
  </div>
    </>
  )
}

export default Adidas