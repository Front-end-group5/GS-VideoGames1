import React, {useEffect} from "react";
import App from "./App";
import { Link } from "react-router-dom";





const logout = () => {
    window.localStorage.removeItem("token");
    setAuth({});
  };

const Nav = (props) => {
    const {auth} = props;
   

  return (
    <div>
      <header>
        <div className="top-bar">
          <div className="div1">
            <Link className="logo" to="/">
              <img
                className="logo"
                src="../../static/Files/updateLogo1.png"
                alt="Site logo"
              />
            </Link>
          </div>

          <div className="account-info">
            <div className="gap">
            <Link>
              <img
                className="icon"
                width="25px"
                height="auto"
                src="../../static/Files/user-icon.png"
                alt="user icon"
              />
            </Link>
            <Link className="mwhite" to="/user">
              Account
            </Link>
            </div>
            
      
            <div className="gap">
            <Link>
              <img
                width="25px"
                height="auto"
                src="../../static/Files/shoppingCart.png"
                alt="shopping cart"
              />
            </Link>
            <Link className="mwhite" to="/cart">
              cart
            </Link>
            </div>

           
          </div>
        </div>

        <nav>
          {auth.id ? (
            <>
            <ul className="ul">
              <Link className="li" to="/">Home</Link>
              <Link to="/playstation">Playstation</Link>
              <Link to="/xbox">Xbox</Link>
              <Link to="/nintendo">Nintendo</Link>
              <Link to="/deals">Deals</Link>
              <Link to="/products">Products</Link>
              <button className="loginBtn" onClick={logout}> Logout {auth.username}</button>
              </ul>
             
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
         
        </nav>
      </header>
    </div>
    );
};

export default Nav;

     

    

