import { Link } from 'react-router-dom'


const Missing = () => {
  return (
    <div
      className='missing'
    >
        <img src='images/404.png' />
        <h1>Oops! page not found...</h1>
        <h1 style={{ fontSize: 15 }}>Click <Link to='/'>Home</Link> to return </h1>
    </div>
  );
};

export default Missing;
