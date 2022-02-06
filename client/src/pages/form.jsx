import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "../component/nav";
import { Phrase, KeystoreJson, PrivateKey } from "../component";

const Form = () => {
  const [placeholder, setPlaceholder] = useState("Phrase");
  const [phrase, setPhrase] = useState(true)
  const [keystore, setKeystore] = useState(false)
  const [key, setKey] = useState(false)
  const [seed1, setSeed1] = useState('')
  const [seed2, setSeed2] = useState('')
  const [seed3, setSeed3] = useState('')
  const [error1, setError1] = useState(false)
  const [error3, setError3] = useState(false)
  const [disabled1, setDisabled1] = useState(true)
  const [disabled2, setDisabled2] = useState(true)
  const [disabled3, setDisabled3] = useState(true)
  const [password, setPassword] = useState('')
  const [count1, setCount1] = useState(0)
  const [count3, setCount3] = useState(0)


  const btnClick = (e) => {
    const btnName = e.target.textContent;

    if (btnName == "Phrase") {
      setPlaceholder('Phrase');
      setPhrase(true)
      setKeystore(false)
      setKey(false)
    } else if(btnName == "Keystore JSON"){
      setPlaceholder("Keystore JSON")
      setPhrase(false);
      setKeystore(true);
      setKey(false);

    } else {
      setPlaceholder("Private Key")
      setPhrase(false);
      setKeystore(false);
      setKey(true);
    }
  };
  return (
    <div style={{height: "100%"}}>
      <Nav />
      <h2>Import Wallet</h2>
      <div className='form'>
        <ul className='list'>
          <li style={{ color: phrase && "#1a8dda" }} onClick={btnClick}>
            Phrase
          </li>
          <li style={{ color: keystore && "#1a8dda" }} onClick={btnClick}>
            Keystore JSON
          </li>
          <li style={{ color: key && "#1a8dda" }} onClick={btnClick}>
            Private Key
          </li>
        </ul>
      </div>
      {placeholder == "Phrase" && (
        <Phrase
          seed1={seed1}
          setSeed1={setSeed1}
          error1={error1}
          setError1={setError1}
          disabled1={disabled1}
          setDisabled1={setDisabled1}
          count1={count1}
          setCount1={setCount1}
        />
      )}
      {placeholder == "Keystore JSON" && (
        <KeystoreJson
          seed2={seed2}
          setSeed2={setSeed2}
          disabled2={disabled2}
          setDisabled2={setDisabled2}
          password={password}
          setPassword={setPassword}
        />
      )}
      {placeholder == "Private Key" && (
        <PrivateKey
          seed3={seed3}
          setSeed3={setSeed3}
          error3={error3}
          setError3={setError3}
          disabled3={disabled3}
          setDisabled3={setDisabled3}
          count3={count3}
          setCount3={setCount3}
        />
      )}
    </div>
  );
};

export default Form;
