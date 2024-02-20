import { Router } from "express"
import { getIndexPage } from "./controllers/index.controller.js"
import { getLoginPage, postLoginForm } from "./controllers/login.controller.js"
import { logout } from "./controllers/logout.controller.js"
import { getNewBlogPage, createPost } from "./controllers/newBlog.controller.js"
import { getRegisterPage, postRegisterForm } from "./controllers/register.controller.js"
import { getBlog } from "./controllers/blog.controller.js"
import authenticate from "./middlewares/authenticate.js"


const router = Router()


router.route("/").get(getIndexPage)

router.route("/register").get(getRegisterPage)
router.route("/register").post(postRegisterForm)

router.route("/login").get(getLoginPage)
router.route("/login").post(postLoginForm)

router.route("/new").get( authenticate, getNewBlogPage )
router.route("/new").post( authenticate, createPost)

router.route("/blog/:slug").get(getBlog)

router.route("/logout").post(logout)


export default router