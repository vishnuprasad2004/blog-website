import express from "express"
import router from "./routes.js"
import connectDb from "./dbConnect.js"
const app = express()
const PORT = 3000

app.set("view-engine", "ejs")
app.use("/", router)

// This route will handle all the requests that are  
// not handled by any other route handler. In  
// this handler we will redirect the user to  
// an error page with NOT FOUND message and status 
// code as 404 (HTTP status code for NOT found) 
app.all('*', (req, res) => {
    res.status(404).render("not-found.ejs");
});

connectDb()


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
