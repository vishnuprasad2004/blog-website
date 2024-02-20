import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const getRegisterPage = (req, res) => {
    res.render("register.ejs", { message: null })
}




export const postRegisterForm = async (req, res) => {
    try {

        console.log("[registration] ", req.body)
        let { name, gender, email, password, profileImage } = req.body

        if ([name, email, password].some(element => element.trim() === "")) {
            res.render("register.ejs", { message: "Some error occured during registering the user." })
        }

        const existedUser = await User.findOne({ email })
        if (existedUser) {
            res.render("register.ejs", { message: "User already registered" })
        }

        if (profileImage.trim() === "") {
            profileImage = "https://images.unsplash.com/photo-1595411425732-e69c1abe2763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hhcGVzfGVufDB8fDB8fHww"
        }

        const newUser = await User.create({ name, email, password, gender, profileImage })
        console.log(newUser);

        let token = jwt.sign({ userDetails: newUser }, process.env.ACCESS_SECRET, { expiresIn: "1d" })
        res.cookie("token", token, { httpOnly: true })
        res.redirect("/")

    } catch (e) {
        console.log(e);
        res.render("register.ejs", { message: "Some error occured during registering the user." })
    }
}


// export default { getRegisterPage, postRegisterForm }