import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  // if no dependency array is passed, the useEffect hook will run after every render, 

  // if there is empty dependency array, the useEffect hook will run only once after the initial render,

  // if the dependency array contains any value, the useEffect hook will run after every render if the value of the dependency array has changed since the last render.

  // here btnName is the dependency array, so the useEffect hook will run after every render if the value of btnName has changed since the last render.

  // useEffect(() => {
  //   console.log('useEffect ran');
  // }, [btnName] );


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}
          alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;