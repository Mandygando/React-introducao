import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home(props) {
  return (
    <>
  <Pagina titulo="Página 1">
    <Container>
    <h1>Hello World!</h1>
    <p>Qualquer texto</p>
    <p>Qualquer texto</p>
    <p>Qualquer texto</p>
    </Container>
    {props.children}
  </Pagina>
    </>
  )
}
