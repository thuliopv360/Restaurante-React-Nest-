import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./router";

function App() {
  const [logged, setLogged] = useState<boolean>(false);
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router logged={logged} setLogged={setLogged} />
    </div>
  );
}

export default App;
