import React, {useState} from 'react';
import RSA from "./components/RSA"
import AES from "./components/AES"

function App() {

  const [state, setstate] = useState({
    selectedAlgorithm: ""
  });


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h1>Encyption/Decryption</h1>
      <span style={{fontSize:'20px'}}>Choose one:</span>
      <br />
      <button onClick={() => setstate({...state, selectedAlgorithm: "RSA"})} style={{padding:"0px 20px"}}>RSA</button><br />
      <button onClick={() => setstate({...state, selectedAlgorithm: "AES"})} style={{padding:"0px 20px"}}>AES</button>
      {
        state.selectedAlgorithm==="RSA" ? <RSA /> : (state.selectedAlgorithm==="AES" ? <AES /> : '')
      }
      </div>

  )
}

export default App
