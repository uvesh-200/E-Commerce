import React from "react";
import Layouts from "../Components/Layouts/layout";
import { PiPaperPlaneRightDuotone } from "react-icons/pi";

function Contact() {
  return (
    <Layouts>
      <div>
        <div id="preloader">
          <div className="jumper">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="page-heading about-page-heading" id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <h2>Contact Us</h2>
                  <span>Awesome, clean &amp; creative Fashion Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
                    width="100%"
                    height="400px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                  {/* You can simply copy and paste "Embed a map" code from Google Maps for any location. */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2>Say Hello. Don't Be Shy!</h2>
                </div>
                <form id="contact" action method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Your email"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          id="message"
                          placeholder="Your message"
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
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
            </div>
          </div>
        </div>
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
                        <span>010-020-0340-040</span>
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
                        <span>fashionshoping@company.com</span>
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
}

export default Contact;
