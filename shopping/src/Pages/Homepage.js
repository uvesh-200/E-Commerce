import React from "react";
import Layouts from "../Components/Layouts/layout";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import background from "./Auth/hero-2.jpg";

function Homepage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layouts>
      {/* <h2>Homepage</h2>
      <pre>{JSON.stringify(auth,null, 4)}</pre> */}
      <div
        className="main_slider"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Awesome, clean & creative Clothes for Any Generations</h6>
                <br />
                <h1>Get up to 30% Off On Shopping</h1>
                <div className="red_button shop_now_button">
                  <NavLink to="/shop">shop now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img src={require(`./Auth/banner-1.jpg`)} alt />
                </div>
                <div className="banner__item__text">
                  <h2>Men's Collections 2023</h2>
                  <NavLink to="/shop">Shop now</NavLink>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img src={require(`./Auth/insta-1.jpg`)} alt />
                </div>
                <div className="banner__item__text">
                  <h2>
                    Women's <br /> Collections 2023
                  </h2>
                  <NavLink to="/shop">Shop now</NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img src={require(`./Auth/kids-img.jpg`)} alt />
                </div>
                <div className="banner__item__text">
                  <h2>
                    Childrens <br /> Collections 2023
                  </h2>
                  <NavLink to="/shop">Shop now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </Layouts>
  );
}

export default Homepage;
