import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
 
const app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0.4v7jz55.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));