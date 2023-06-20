import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { Alert } from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState<{content: string|null, type: string|null}>({content: null, type: null});
  const showAlert = (content: string, type: string) => {
    setAlert({
      content: content, 
      type: type
    })
    setTimeout(() => {
      setAlert({
        content: null,
        type: null
      })
    }, 1500);
  } 
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#1c1d3b';
      showAlert('Dark mode enabled!', 'success')
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='#ffffff';
      showAlert('Light mode enabled!', 'success')
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} mode={mode} heading="Enter Your Text Here!"/>
    </>
  );
}

export default App;
