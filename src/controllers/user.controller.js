import UserModel from "../models/user.model.js";

export default class UserController{

    getRegister(req,res){
        res.render('register');
    }

    getLogin(req,res){
        res.render('login', { errorMessage:null });
    }

    postRegister(req,res){
        console.log(req.body)
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render('login', { errorMessage: null });
    }

    postLogin(req, res) {
        const { email, password } = req.body;
        const user = UserModel.isValidUser(
          email,
          password
        );
        if (!user) {
          return res.render('login', {
            errorMessage: 'Invalid Credentials',
          });
        }
        res.render("addJob");
      }
}