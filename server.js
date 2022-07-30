const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const dotenv = require('dotenv');

// const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
require('./data/coupons');
// const URI = process.env.DATABASE;
// mongoose.connect(URI, {useNewUrlParser: true}).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(require('./routes/auth'));

//for heroku deploy
const PORT = process.env.PORT || 5000;

//for heroku deploy
if(process.env.NODE_ENV === "PRODUCTION"){
    app.use(express.static("Frontend/build"));
}

app.listen(PORT, () => {
    console.log(`server running......on ${PORT}`);
})





// const middleware =(req,res,next)=>{
//     console.log("hello my middleware");
//     next();
// }
// app.get("/about", middleware, (req,res)=>{
//     // res.cookie("test", 'aboutcook');
//     console.log("hello my about");
//     res.send("about from server");
// })


