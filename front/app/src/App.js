
import './App.css';
import AddColaborador from './componentes/Addcolaborador';
import ColaboradoresChart from './componentes/ColaboradoresChart';
import ColaboradoresTable from './componentes/ColaboradoresTable';

function App() {
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
      </div>
 
    </div>
  );
}

export default App;
