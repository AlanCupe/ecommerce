import { API_URL } from "../../constants/env";

function Home() {
  return (
    <>
      <h2>
        Hola {API_URL}
        <p>Este es el sitio en desarrollo</p>
      </h2>
      <h1 className="text-lg">Hello world!</h1>
    </>
  );
}

export default Home;
