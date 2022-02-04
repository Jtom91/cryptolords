import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaTwitter, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import './home.css'
import Nav from '../component/nav'
import data from "./data";



const Home = () => {
  return(
    <>
      <Nav />
      <h2>Wallets</h2>
      <p>
        Multiple iOS and Android wallets support the WalletConnect protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
      </p>
      <div className="gallery">
        { data.map((item, index) => {
          return (
            <Link to="/form" key={index}>
              <img src={`images/img${index}.png`} />
              <p>{item}</p>
            </Link>
          );
        })}
      </div>
      <footer>
        <ul>
          <li><FaDiscord size={20} style={{marginRight: 5}} /> Discord</li>
          <li><FaTelegramPlane size={20} style={{marginRight: 5}} /> Telegram</li>
          <li><FaTwitter size={20} style={{marginRight: 5}} /> Twitter</li>
          <li><FaGithub size={20} style={{marginRight: 5}} /> Github</li>
        </ul>
      </footer>
    </>
  )
}

export default Home