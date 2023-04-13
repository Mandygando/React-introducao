import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiDeputados from '../../services/apiDeputados';

const Hooks = () => {

  const [deputados, setDeputados] = useState([]);

  useEffect(()=>{

    apiDeputados.get('/deputados').then(resultado=>{
      setDeputados(resultado.data.dados)
      
    })
  }, [])

  return (
    <Pagina titulo="Deputados">
      {deputados.map(item=>(
        <img title={item.nome} key={item.id} src={item.urlFoto} width="150px" />
      ))}
    </Pagina>
  );
}

export default Hooks;