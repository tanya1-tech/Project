import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();   

//to handle cross origin request
app.use(cors());

//to link routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';

//to link controller
import Gateway from './controller/payment.controller.js';

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//configuration to fetch req file content : file upload middleware
app.use(fileUpload());

//config to load routers
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);

//method to load Gateway
app.post("/payment",Gateway);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
