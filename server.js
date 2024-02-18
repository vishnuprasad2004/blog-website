import express from "express"
import router from "./routes.js"
import connectDb from "./utils/dbConnect.js"
import { config } from "dotenv"

config()
const app = express()
const PORT = 3000

app.set("view-engine", "ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router)


app.all('*', (req, res) => {
    res.status(404).render("not-found.ejs");
});

connectDb()


app.listen(PORT, () => console.log(`[server] listening on http://localhost:${PORT}`));
