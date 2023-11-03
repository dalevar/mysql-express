import express from "express";
import cors from "cors";
import UserRoute from './routes/UserRoute.js';
import bodyParser from "body-parser";
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World");
    });

const app = express();
app.use(cors());

// Agar format yang diterima selalu json
app.use(bodyParser.json());
app.use(UserRoute);

app.listen(port, () => {
    console.log(`Server up and running in port ${port} ....`)
})