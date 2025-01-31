require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require ("./db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");

const corsOptions ={
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

//admin route
app.use("/api/admin", adminRoute); 

/*app.get("/",(req,res)=>{
    res.status(200).send("welcome to my first express js page");
})

app.get("/register",(req,res)=>{
    res.status(200).send("registration page");
})*/
app.use(errorMiddleware);
const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});