import { API_URL } from "../env";
function App({ name }) {
  return (
    <>
      <h2>
        Hola {name} {API_URL}
        <p>Este es el sitio en desarrollo</p>
      </h2>
    </>
  );
}

export default App;
