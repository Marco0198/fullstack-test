import express, { Response } from "express";
import bodyParser from "body-parser";
import controllers from "./src/controllers";

const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/newsapi', controllers);



const PORT = 5000; 
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}.`);
});