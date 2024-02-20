// import { jwt } from "jsonwebtoken";
const authenticate = (req, res, next) => {
    let token = req.headers.cookie.split("=")[1]
    if(token) {
        next()
    } else {
        res.redirect("/login")
    }
}

export default authenticate