import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("before request");

  async function getHelloWorld() {
    try {
      const response = await axios.get("http://localhost:3000/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return "failed to fetch";
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
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
