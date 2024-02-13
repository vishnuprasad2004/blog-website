import { Router } from "express"
const router = Router()

router.route("/").get((req,res) => {
    res.render("index.ejs") 
})

router.route("/register").get((req,res) => {
    res.render("register.ejs") 
})

router.route("/login").get((req,res) => {
    res.render("login.ejs") 
})

router.route("/profile/:id").get((req,res) => {
    res.render("profile.ejs",{username:req.params.id}) 
})

export default router