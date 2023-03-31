import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const pagina2 = () => {
  return (
        <>
        <Pagina/>
        <Container>
        <h1>Pagina2</h1>

        <Rodape/>
        </Container>
        </>
  )
}

export default pagina2