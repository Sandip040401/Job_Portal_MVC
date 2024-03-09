import express from "express";
import ejs from "ejs";
import ejsLayouts from 'express-ejs-layouts';
import path from "path";
import JobsController from "./src/controllers/job.controller.js";
import UserController from "./src/controllers/user.controller.js";
const app = express();



app.use(express.static('public'));

const jobsController = new JobsController();
const userController = new UserController();
app.use(ejsLayouts);
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));



app.get("/",jobsController.viewJobs);
app.get("/register",userController.getRegister);
app.post("/register",userController.postRegister);
app.get("/login",userController.getLogin);
app.post("/login",userController.postLogin);

app.use(express.static('src/views'));
export default app;