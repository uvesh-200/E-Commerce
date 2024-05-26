import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../Controllers/authController.js";
import { requireSignIn, isAdmin } from "../Middlewares/authmiddleware.js";

const Router = express.Router();

Router.post(`/register`, registerController);

Router.post(`/login`, loginController);

Router.get("/test", requireSignIn, isAdmin, testController);

Router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
Router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default Router;
