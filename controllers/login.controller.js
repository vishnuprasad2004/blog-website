import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import bcrypt from "bcrypt"



export const getLoginPage = (req, res) => {
    res.render("login.ejs", { message: null })
}


export const postLoginForm = async (req, res) => {
    try {

        console.log(req.body)
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (isCorrectPassword) {
            let token = jwt.sign({ userDetails: newUser }, process.env.ACCESS_SECRET, { expiresIn: "1d" })
            res.cookie("token", token, { httpOnly: true })
            res.redirect("/")
        } else {
            res.render("login.ejs", { message: "Either email or password is wrong." })
        }

    } catch (e) {
        console.log(e);
    }
}


// export default { getLoginPage, postLoginForm }