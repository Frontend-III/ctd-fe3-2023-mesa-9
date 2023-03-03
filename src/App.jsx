import "./styles.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select>
            <option selected disabled>
              Selecione una carrera
            </option>
            <option value="database">Base de Datos</option>
            <option value="backend">Desarrollo Backend</option>
            <option value="frontend">Desarrollo Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Cantidad de Estudiantes</th>
              <th>Promedio de Calificaciones de los Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base de Datos</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desarrollo Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desarrollo Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
