import Post from "../models/postModel.js"


export const getBlog = async (req, res) => {

    try {
        let slug = req.params.slug
        // blog = blogs.find((element) => element.slug == slug)
        const blog = await Post.findOne({ slug })
        // const md = new MarkdownIt()
        // blog.content = md.render(blog.content)

        res.render("blog.ejs", { blog })
    } catch (e) {
        res.redirect("/")
        console.log(e);
    }
}