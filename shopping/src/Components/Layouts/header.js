import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from "react-hot-toast";
import { AiOutlineClose, AiOutlineCaretDown } from "react-icons/ai";
import Searches from "../Form/Searches";
import useCategory from "../../context/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const [isActive, setActive] = useState("false");
  const logout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem(`auth`);
    toast.success("Logout Successfully");
  };
  return (
    <>
      <div className={isActive ? "inactive" : "active"}>
        <header className="header">
          <div className="logo_container">
            <NavLink to="/" className="name">
              🛒 FASHION <span className="logoname">SHOPPING</span>
            </NavLink>
          </div>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-link">
                <Searches />
              </li>
              <li>
                <NavLink to="/" className="navbar-link" href="#">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="navbar-link" href="#">
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection" className="navbar-link" href="#">
                  COLLECTION <AiOutlineCaretDown style={{ fontSize: "12px" }} />
                </NavLink>
                <ul className="dropdown">
                  {categories?.map((c) => (
                    <li>
                      <NavLink
                        to={`/singleCollection/${c.slug}`}
                        className="menu"
                        href="#"
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/about" className="navbar-link" href="#">
                  ABOUT
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li>
                    <Link to={"/login"} className="navbar-link">
                      ACCOUNT{" "}
                      <AiOutlineCaretDown style={{ fontSize: "12px" }} />
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/register" className="menu" href="#">
                          REGISTER
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/login" className="menu" href="#">
                          LOGIN
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Badge count={cart?.length} showZero>
                      <NavLink to="/cart" className="menu" href="#">
                        CART
                      </NavLink>
                    </Badge>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/" className="navbar-link">
                      {auth?.user?.name}
                      <AiOutlineCaretDown style={{ fontSize: "12px" }} />
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="menu"
                          href="#"
                        >
                          DASHBOARD
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={logout}
                          to="/login"
                          className="menu"
                          href="#"
                        >
                          LOGOUT
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Badge count={cart?.length} showZero>
                      <NavLink to="/cart" className="menu" href="#">
                        CART
                      </NavLink>
                    </Badge>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <button
            className="mobile-navbar-btn"
            onClick={() => setActive(!isActive)}
          >
            <span>
              {isActive ? (
                <GiHamburgerMenu style={{ fontSize: "20px" }} />
              ) : (
                <AiOutlineClose style={{ fontSize: "20px" }} />
              )}
            </span>
          </button>
        </header>
      </div>
    </>
  );
};

export default header;
