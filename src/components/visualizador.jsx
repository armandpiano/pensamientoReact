// 1. El hijo recibe información
function Visualizador(props) {
  return (
    <div style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', margin: '10px' }}>
      <h3 style={{color:'black'}}>{props.titulo}</h3>
      <p style={{ fontSize: '30px' , color:'black'}}>${props.cantidad}</p>
    </div>
  );
}

export default Visualizador