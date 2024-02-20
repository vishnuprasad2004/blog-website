import express from "express"
import jwt from "jsonwebtoken"
import Post from "../models/postModel.js"



export const getNewBlogPage = (req, res) => {
    res.render("newBlog.ejs", { message: null })
}


export const createPost = async (req, res) => {
    try {

        console.log(req.body);
        const { title, content } = req.body

        const token = req.headers.cookie.split("=")[1] || ""
        const tokenData = jwt.verify(token, process.env.ACCESS_SECRET) || ""
        const user = tokenData.userDetails

        const d = new Date();
        const slug = encodeURI(d.getDate().toString() + "-" + d.getMonth().toString() + "-" + d.getFullYear().toString() + "-" + title.replace(" ", "-"))
        const author = user.name
        const authorId = user._id
        const newPost = await Post.create({
            title,
            content,
            slug,
            author,
            authorId
        })
        console.log(newPost);
        res.redirect("/")

    } catch (e) {
        console.log(e);
        res.render("newBlog.ejs", { message: "Some error occured during creating the blog." })
    }
}


