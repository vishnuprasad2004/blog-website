import express from "express"
import jwt from "jsonwebtoken"
import Post from "../models/postModel.js"




export const getIndexPage = async(req, res) => {

    let token, tokenData
    if (req.headers.cookie) {
        token = req.headers.cookie.split("=")[1] || ""
    }
    if (token) {
        tokenData = jwt.verify(token, process.env.ACCESS_SECRET) || ""
        const userData = tokenData.userDetails

        const blogs = await Post.find({ authorId: userData._id })

        res.render("index.ejs", { loggedIn: true, user: userData, myBlogs: blogs })
    } else {
        res.render("index.ejs", { loggedIn: false, user: null, myBlogs: null })
    }

}

