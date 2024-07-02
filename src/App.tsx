import "./firebase"
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { _getToken } from "./firebase";

function App() {

  const [isTokenFound, setTokenFound] = useState(false);
  _getToken(setTokenFound);

  return (
    <>
      {
        isTokenFound &&
        "Notification permission enabled 👍🏻"
      }
      {
        !isTokenFound &&
        "Need notification permission ❗️"
      }
    </>
  )
}

export default App