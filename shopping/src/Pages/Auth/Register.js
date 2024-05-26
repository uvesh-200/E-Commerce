import React, { useState } from "react";
import Layout from "./../../Components/Layouts/layout";
import Toast from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          phone,
          address,
          email,
          password,
        }
      );

      if (res && res.data.success) {
        Toast.success(res && res.data.message);
        history("/login");
      } else {
        Toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      Toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="register_page">
        <section className="vh-100">
          <div className="containeres h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Register
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={submitData}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              {/* <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Name
                              </label> */}
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Your Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              {/* <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Phone Number
                              </label> */}
                              <input
                                type="number"
                                id="form3Example1c1"
                                value={phone}
                                className="form-control"
                                placeholder="Enter your Phone No"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              {/* <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Address
                              </label> */}
                              <input
                                type="text"
                                value={address}
                                id="form3Example1c2"
                                className="form-control"
                                placeholder="Enter your Address"
                                onChange={(e) => setAdress(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              {/* <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Your Email
                              </label> */}
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                value={email}
                                placeholder="Enter your Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              {/* <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Password
                              </label> */}
                              <input
                                type="password"
                                value={password}
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Enter your Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              {/* <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Confirm your password
                              </label> */}
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Confirm your password"
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src={require(`./e.png`)}
                          className="img-fluid"
                          alt="e shopping image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Register;
