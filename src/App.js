import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import imagen from './imgs/1.png'
import imagenuno from './imgs/2.png'
import imagendos from './imgs/3.jpg'
import imagentres from './imgs/4.png'
import imagencuatro from './imgs/5.jpg'
import imagencinco from './imgs/6.jpg'
import imagenseis from './imgs/7.jpg'
import imagensiete from './imgs/8.jpg'
import imagenocho from './imgs/9.png'
import imagennueve from './imgs/10.jpg'
import imagendiez from './imgs/11.png'
import imagenonce from './imgs/12.jpg'


function App() {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen}
      alt="Slide"
      style={{height: "1920px"}}
    />
    <Carousel.Caption>
      <h3>Graduarme</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagenuno}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Trabajar</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagendos}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Independencia</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagentres}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Aprender un idioma</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagencuatro}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Artista 3D</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagencinco}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Casa</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagenseis}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Otro carro</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagensiete}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Viajar</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagenocho}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>VFX</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagennueve}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Esculpir</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagendiez}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>Ahorrar</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagenonce}
      alt="Slide"
      style={{height: "1920px"}}
    />

    <Carousel.Caption>
      <h3>280zx</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
  );
}

export default App;
