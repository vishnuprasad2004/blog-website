import express from "express"


export const logout = (req, res) => {
    res.cookie("token", "", { httpOnly: true })
    res.redirect("/")

}

