import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoutes from "../backend/Routes/userRoutes.js"
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());                                
app.use('/users',usersRoutes)

app.listen(PORT, () => {
  console.log("server has started on http//:localhost:" + PORT);
})