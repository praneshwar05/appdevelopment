import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsGoogle,
  BsPinterest,
  BsGithub,
} from 'react-icons/bs';
import navImg from '../assets/images/menu.png';
import './NavBar.css';
import logo from '../assets/images/mountain-adventure-club-logo-design-template-f30d0b2135369f3d04623f458d7a8714_screen.jpg';
import SearchComponent from './SearchComponent';
import ModelSearchedAdventures from './ModelSearchedAdventures';

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const [adventures, setAdventures] = useState([]);
  useEffect(() => {
    fetch('https://outdoor-adventures.onrender.com/api/v1/adventures')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setAdventures(data);
      })
      .catch((error) => error);
  }, []);
  const myInputRef = useRef();
  function capitalWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const [searchedAdventures, setSearchedAdventures] = useState([]);
  const searchAdventures = () => {
    const sAD = adventures.filter((a) => a.name.startsWith(capitalWord(myInputRef.current.value)));
    if (sAD !== null) {
      setSearchedAdventures(sAD);
    }
    return [];
  };
  return (
    <div className=" bg-body-tertiary mb-5">
      <div className="d-flex justify-content-between">
        {user !== null && (
          <SearchComponent
            myInputRef={myInputRef}
            searchAdventures={searchAdventures}
          />
        )}

        <ModelSearchedAdventures searchedAdventures={searchedAdventures} />
        <img
          src={navImg}
          alt="hamburgger"
          className="pt-4 pb-3 ms-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        />
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="d-flex justify-content-start">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <Link to="/">
              <img
                src={logo}
                className="w-50 mt-3 ms-3 "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </Link>
          </h5>
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
        </div>
        <div
          className="offcanvas-body"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <Link to="/" className="nav-link">
            Adventures
          </Link>
          <br />
          {user !== null && (
            <>
              <Link to="/reservations" className="nav-link">
                Saved Adventures
              </Link>
              <br />
              <Link to="/addAdventure" className="nav-link">
                Add Adventure
              </Link>
            </>
          )}

          {user === null && (
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          )}

          <br />
          {user === null && (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </div>

        <div className="sticky-footer mb-2 ms-3 d-flex flex-column">
          <div className="d-flex mb-3">
            <Link
              to="https://www.facebook.com"
              className="nav-link"
            >
              <BsFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="nav-link"
            >
              <BsInstagram />
            </Link>
            <Link to="https://www.google.com/" className="nav-link">
              <BsGoogle />
            </Link>
            <Link to="https://www.pinterest.com" className="nav-link">
              <BsPinterest />
            </Link>
            <Link to="https://github.com" className="nav-link">
              <BsGithub />
            </Link>
            <Link to="https://www.whatsapp.com" className="nav-link">
              <BsWhatsapp />
            </Link>
          </div>
          <div className="ms-2">
            <p>
              <Link
                to="https://github.com"
                className="link-success"
                style={{ textDecoration: 'none' }}
              >
                {'  '}
              </Link>
              <Link
                to="https://github.com"
                className="link-success"
                style={{ textDecoration: 'none' }}
              >
                {'  '}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
