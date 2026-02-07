import { useState } from "react";
import Visualizador from "./components/visualizador"


function App() {
  const [ahorro, setAhorro] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [historial,setHistorial]= useState([]);
  const [inputAhorro,setInputAhorro]=useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Mi Alcancía Digital</h1>
      
      {/* 2. AQUÍ USAMOS EL HIJO PASÁNDOLE PROPS */}
      <Visualizador titulo="Ahorro Actual" cantidad={ahorro} />
      <Visualizador titulo="Gastos Actual" cantidad={gastos} />
      <Visualizador titulo="Balance Gastos" cantidad={ahorro-gastos} />
      <ul>
        {historial.map((movimiento,index)=>(
          <li key={index}>Ahorraste:{movimiento}, el indice es: {index}</li>
        ))}
      </ul>
      
      {/* RETO: Usa OTRO <Visualizador /> aquí para los gastos */}
      {/* RETO: Usa UN TERCER <Visualizador /> aquí para el balance */}

      <hr />
      <button onClick={() => {setAhorro(ahorro + 10); setHistorial([...historial,ahorro]);}}>Ahorrar $10</button>
      <button onClick={() => setGastos(gastos + 5)}>Comprar Café</button>
      <input type="number" value={inputAhorro} onChange={(e)=> setInputAhorro(Number(e.target.value))} />
      <button onClick={()=> {setAhorro(ahorro+inputAhorro);setHistorial([...historial,inputAhorro]);setInputAhorro(0)}}>Confirmar Ahorro</button>
    </div>
  );
}
export default App