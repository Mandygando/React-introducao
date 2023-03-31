import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import { Container } from 'react-bootstrap';

const Pagina = () => {
  return (
  <>
  <Cabecalho/>
  <div className='bg-secondary text-white py-3 text-center mb-3'>
    <h1>Página Inicial</h1>
  </div>
  <Rodape/>
  </>
  )
}

export default Pagina