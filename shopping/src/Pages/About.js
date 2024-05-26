import React from "react";
import Layouts from "../Components/Layouts/layout";
import { PiInstagramLogo, PiPaperPlaneRightDuotone } from "react-icons/pi";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";

const About = () => {
  return (
    <Layouts>
      <div>
        <div className="page-heading about-page-heading" id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <h2>About Our Company</h2>
                  <span>Awesome, clean &amp; creative Fashion Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="left-image">
                  <img src={require(`./Auth/about-left-image.jpg`)} alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-content">
                  <h4>About Us &amp; Our Skills</h4>
                  <span>
                    Welcome to our e-commerce website! We are a team of
                    passionate individuals whose aim to provide the best online
                    shopping experience to our customers. Our goal is to offer a
                    wide range of high-quality product at competitive prices
                  </span>
                  <div className="quote">
                    <i className="fa fa-quote-left" />
                    <p>
                      with a focus on our customer satisfaction, we strive to
                      deliver excellent service, quick shipping, and responsive
                      customer support. Our website is designed to be
                      user-friendly, making it easy for you to find what you
                      need and place orders hassle-free.
                    </p>
                  </div>
                  <p>
                    Thank you for choosing us for yoyr online shopping needs. We
                    value your trust and are committed to continuously improving
                    your shopping experience with us.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagramSquare />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="our-team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Our Amazing Team</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div className="thumb">
                    <div className="hover-effect">
                      <div className="inner-content">
                        <ul>
                          <li>
                            <a href="#">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaYoutube />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <img src={require(`./Auth/profile.jpeg`)} />
                  </div>
                  <div className="down-content">
                    <h4>Dhruv Jadav</h4>
                    <span>Product Caretaker</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div className="thumb">
                    <div className="hover-effect">
                      <div className="inner-content">
                        <ul>
                          <li>
                            <a href="#">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <PiInstagramLogo />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <img src={require(`./Auth/profile.jpeg`)} />
                  </div>
                  <div className="down-content">
                    <h4>Uvesh Chapti</h4>
                    <span>Product Caretaker</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div className="thumb">
                    <div className="hover-effect">
                      <div className="inner-content">
                        <ul>
                          <li>
                            <a href="#">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <PiInstagramLogo />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <img src={require(`./Auth/profile.jpeg`)} />
                  </div>
                  <div className="down-content">
                    <h4>Afzal Timbawaala</h4>
                    <span>Product Caretaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-heading">
                  <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                </div>
                <form id="subscribe" action method="get">
                  <div className="row">
                    <div className="col-lg-5">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-5">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email Address"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-2">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-dark-button"
                        >
                          <PiPaperPlaneRightDuotone
                            style={{ fontSize: "20px" }}
                          />
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        Store Location:
                        <br />
                        <span>Bharuch - Surat</span>
                      </li>
                      <li>
                        Phone:
                        <br />
                        <span>010-020-030-040</span>
                      </li>
                      <li>
                        Office Location:
                        <br />
                        <span>Bharuch - Surat</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        Work Hours:
                        <br />
                        <span>07:30 AM - 9:30 PM Daily</span>
                      </li>
                      <li>
                        Email:
                        <br />
                        <span>fashionshopping@company.com</span>
                      </li>
                      <li>
                        Social Media:
                        <br />
                        <span>
                          <a href="#">Facebook</a>, <a href="#">Instagram</a>,{" "}
                          <a href="#">Twitter</a>, <a href="#">Linkedin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default About;
