const express = require('express')
const app = express()
const path = require("path")
const configeFileStatic = require("../confige/staticFile")
const configeViewEngine = require("../confige/viewEngine")
const initEmail = require("../router/email")
const initWebRouter = require("../router/web")
const initApiRouter = require("../router/api")
const cookieParser = require('cookie-parser');

// variable global url
app.locals.BASE_URL  = "https://thoitrangdarkt-com.onrender.com" || process.env.HOST_URL


// Middleware parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie-parser
app.use(cookieParser());

// dotenv
require("dotenv").config()
const port = 4001
// stati file
configeFileStatic(app,path,__dirname)
// view engine
configeViewEngine(app,path,__dirname)

// init web router
app.use("/",initWebRouter)

// init api
app.use("/api/v1",initApiRouter)

app.use("/",initEmail)

app.listen(port, () => {
  console.log(` f Example app listening on port ${port}`)

})