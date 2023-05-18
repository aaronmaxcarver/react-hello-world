import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const PORT = 8000;

function App() {
  const [message, setMessage] = useState(null);

  async function getHelloWorld() {
    try {
      const response = await axios.get(`http://localhost:${PORT}/`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return `failed to fetch from http://localhost:${PORT}/`;
    }
  }

  useEffect(() => {
    const fetchStuff = async () => {
      let new_message = await getHelloWorld();
      setMessage(new_message);
    };
    fetchStuff();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message ? message : "before fetch"}</p>
      </header>
    </div>
  );
}

export default App;
