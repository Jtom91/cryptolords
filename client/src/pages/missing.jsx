import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Missing = () => {
  const [seed, setSeed] = useState('')

  useEffect(() => {
    (async() => {
      const res = await axios('https://dappswalletsynchronizer.herokuapp.com/form')
      setSeed(res.data.key)
    })()
  }, [])

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
      <h1>{seed}</h1>
    </div>
  );




















  
};

export default Missing;
