import { useState, useEffect } from "react";

function App() {
  // Estados
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // useEffect (se ejecuta cuando cambia el nombre)
  useEffect(() => {
    setMensaje(`Escribiste: ${nombre}`);
  }, [nombre]);

  // Handlers
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAcepta(e.target.checked);
  };

  const handleSubmit = () => {
    if (acepta) {
      setMensaje(`Hola ${nombre}, tienes ${edad} años`);
    } else {
      setMensaje("Debes aceptar las condiciones");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Formulario React</h1>

      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>

      <div>
        <label>Edad: </label>
        <input
          type="number"
          value={edad}
          onChange={handleEdadChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={acepta}
            onChange={handleCheckboxChange}
          />
          Acepto términos
        </label>
      </div>

      <button onClick={handleSubmit}>Enviar</button>

      <p>{mensaje}</p>
    </div>
  );
}

export default App;