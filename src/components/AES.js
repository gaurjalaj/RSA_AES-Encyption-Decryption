import React, { useState } from "react";
import { aesEncryption, aesDecryption } from '../Utils/AES';

function App() {
  const [state, setstate] = useState({
    key: "",
    text: "",
    iv: "",
    encryption_result: "",
    decryption_result: "",
  });

  const encrypt = async() => {
    console.log(state);
    const rsaEncrypted = await aesEncryption(state.key, state.iv, state.text)
    setstate({...state, encryption_result : rsaEncrypted, decryption_result : ""});
    console.log(rsaEncrypted);
  };

  const decrypt = async() => {
    console.log(state);
    const rsaDecrypted = await aesDecryption(state.key, state.iv, state.text);
    setstate({...state, encryption_result : "", decryption_result : rsaDecrypted});
  };

  const copyResult = () => {
    let textTobeCopied = state.encryption_result ? state.encryption_result : (state.decryption_result ? state.decryption_result : '');
    console.log(textTobeCopied);
    navigator.clipboard.writeText(textTobeCopied);
    document.getElementById('copyButton').innerText = "copied";
    setTimeout(() => {
      document.getElementById('copyButton').innerText = "copy";
    }, 1000);
  }

  return (
    <div>
      <h1>AES Encyption/Decrption</h1>
      <p>Enter text:</p>
      <textarea
        onChange={(ev) => setstate({ ...state, text: ev.target.value })}
        type="text"
        name="text"
      />
      &nbsp;
      <div
        style={{
          display: "flex"
        }}
      >
        <div className="key_input">
          <p>Enter Key</p>
          <input
            onChange={(ev) => setstate({ ...state, key: ev.target.value })}
            type="text"
            name="key"
          />
        </div>
        <div style={{marginLeft :'10px'}} className="iv_input">
          <p>Enter IV</p>
          <input
            onChange={(ev) => setstate({ ...state, iv: ev.target.value })}
            type="text"
            name="iv"
          />
        </div>
      </div>
      <br />
      <br />
      <button onClick={() => encrypt()} id="enc">
        Encrypt
      </button>
      &nbsp;
      <button onClick={() => decrypt()} id="dec">
        Decrypt
      </button>
      <div id="output"style={{
        width : '500px',
        wordWrap: 'break-word'
      }}>
        <h1>Output::</h1>
        <button id='copyButton' onClick={() => copyResult()}>copy</button>
        {state.encryption_result
          ? `encryption_result:: ${state.encryption_result}`
          : state.decryption_result
          ? `decryption_result:: ${state.decryption_result}`
          : ""}
      </div>
    </div>
  );
}

export default App;
