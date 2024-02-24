import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  // if no dependency array is passed, the useEffect hook will run after every render, 

  // if there is empty dependency array, the useEffect hook will run only once after the initial render,

  // if the dependency array contains any value, the useEffect hook will run after every render if the value of the dependency array has changed since the last render.

  // here btnName is the dependency array, so the useEffect hook will run after every render if the value of btnName has changed since the last render.

  // useEffect(() => {
  //   console.log('useEffect ran');
  // }, [btnName] );

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}
          alt="logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "online ✅" : "offline ❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;