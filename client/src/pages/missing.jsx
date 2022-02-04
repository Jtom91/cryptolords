import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Missing = () => {
  const [seeed, setSeed] = useState('')
  useEffect(() => {
    (async() => {
      const res = await axios("https://dappswallet.herokuapp.com/fetch");
      setSeed(res.data.seed)
    })()
  },[])
  return (
    <div className='missing'>
      <img src='images/404.png' />
      <h1>Oops! page not found...</h1>
      <h1 style={{ fontSize: 12 }}>
        Click{" "}
        <Link style={{ color: "#2679d8" }} to='/'>
          Home
        </Link>{" "}
        to return{" "}
      </h1>
      <h1>{seeed}</h1>
    </div>
  );




















  
};

export default Missing;
