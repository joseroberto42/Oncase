import './Config.css';
import DeleteUser from '../.././componentes/DeleteColaborador';
import EditUser from '../.././componentes/EditColaborador';
import Navbar from '../../componentes/Navbar';
import ColaboradoresTable from '../../componentes/ColaboradoresTable';

function Home() {
  return (
    <div className='config' >
        <Navbar></Navbar>
     <div className='app-container '>
        <h1>Tela de configuraçoes</h1>
        <p Style={{ color: 'black' }}>Aqui voce pode editar e deleter colaboradores</p>
        </div>     
     
     <div className='centralizado' >
        <EditUser></EditUser>
        <DeleteUser></DeleteUser>
     </div>
        <br />
        <h3 className='texto'> Lista de Colaboradores</h3>
        <ColaboradoresTable className='app-container'></ColaboradoresTable>

    </div>
  );
}

export default Home;