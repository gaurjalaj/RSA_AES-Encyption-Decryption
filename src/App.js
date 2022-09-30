import React, {useState} from 'react';
import forge from "node-forge";
import { rsaEncryption } from './Utils/Enc';
import { rsaDecryption } from './Utils/Dec';


function App() {

  const [state, setstate] = useState({
    key : '',
    text : '',
    encryption_result : "",
    decryption_result : "",
  });

  const encrypt = () => {
    console.log(state);
    const rsaEncrypted = rsaEncryption(state.key, state.text)
    setstate({...state, encryption_result : rsaEncrypted, decryption_result : ""});
    console.log(rsaEncrypted);
  }

  
  const decrypt = () => {
    console.log(state);
    const rsaDecrypted = rsaDecryption(state.key, state.text);
    setstate({...state, encryption_result : "", decryption_result : rsaDecrypted});
  }


  return (
    <div>
      <h1>RSA Encyption/Decrption</h1>
      <p>Enter text:</p>
      <textarea onChange = {(ev) => setstate({...state, text: ev.target.value})} type="text" name="text" />&nbsp;
      <p>Enter Public/privateKey</p>
      <textarea onChange = {(ev) => setstate({...state, key: ev.target.value})} type="text" name="key" /><br /><br />
      <button onClick={() => encrypt()} id='enc'>Encrypt</button>&nbsp;
      <button onClick={() => decrypt()} id='dec'>Decrypt</button>
      <div id='output'><h1>Output::</h1>{state.encryption_result ? `encryption_result:: ${state.encryption_result}` : state.decryption_result ? (`decryption_result:: ${state.decryption_result}`) : ""}</div>
      </div>

  )
}

export default App