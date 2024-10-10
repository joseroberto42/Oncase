import './Home.css';
import AddColaborador from '../../componentes/Addcolaborador';
import ColaboradoresChart from '../../componentes/ColaboradoresChart';
import ColaboradoresTable from '../../componentes/ColaboradoresTable';
import React from 'react';

function Home() {
  return (
    <div >
     <AddColaborador></AddColaborador>
     <div className='app-container '>
      <h1>DATA</h1>
      <p Style={{ color: 'black' }}>Lorem texto teste </p>
      </div>     
     
     <div className="row-container">
        <ColaboradoresTable />
        <ColaboradoresChart></ColaboradoresChart>
      </div >
      
    </div>
  );
}

export default Home;