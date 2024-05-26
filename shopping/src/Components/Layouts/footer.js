import React from "react";
import { toast } from "react-hot-toast";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function footer() {
  return (
    <>
      <footer className="footer-section spad">
        <div className="container">
          <div className="newslatter-form">
            <div className="row">
              <div className="col-lg-12">
                <form action="#">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" onClick={() => toast.success("Thanks for Subscribing")}>Subscribe to our newsletter</button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-widget">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About us</h4>
                  <ul>
                    <li>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Customer Care</h4>
                  <ul>
                    <li>
                      <NavLink to="/searchPage">Search</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Our Products</h4>
                  <ul>
                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">Cart</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>  &nbsp;&nbsp;&nbsp;&nbsp;Join Us</h4>
                  <ul>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-links-warp">
          <div className="container">
            <div className="social-links">
              <NavLink className="instagram">
                <i className="fa-instagram" />
                <FaInstagram style={{ color: "white", fontSize: "18px" }} />
                <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram</span>
              </NavLink>
              <NavLink href className="pinterest">
                <i className="fa fa-pinterest" />
                <FaPinterest style={{ color: "white", fontSize: "18px" }} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pinterest</span>
              </NavLink>
              <NavLink href className="facebook">
                <i className="fa fa-facebook" />
                <FaFacebookF style={{ color: "white", fontSize: "18px" }} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Facebook</span>
              </NavLink>
              <NavLink href className="twitter">
                <i className="fa fa-twitter" />
                <FaTwitter style={{ color: "white", fontSize: "18px" }} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twitter</span>
              </NavLink>
              <NavLink href className="youtube">
                <i className="fa fa-youtube" />
                <FaYoutube style={{ color: "white", fontSize: "18px" }} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Youtube</span>
              </NavLink>
            </div>
          </div>
          <div className="container text-center pt-5">
            <p style={{color:"white"}}>
      
              Copyright © All rights reserved

            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
