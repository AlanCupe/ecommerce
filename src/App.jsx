import { API_URL } from "../env";
function App({ name }) {
  return (
    <>
      <h2>
        Hola {name} {API_URL}
      </h2>
    </>
  );
}

export default App;
