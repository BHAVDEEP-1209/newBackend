require("dotenv").config();
const express = require('express')

const app = express()
app.use(express.json({limit : "50mb"}));
app.use(express.urlencoded({limit : "50mb", extended : true}));

global.argv = process.argv.slice(2);
global.listeningPort = argv[0] || process.env.PORT

if(!listeningPort){
    console.log(`Port is not defined ${argv}`);
    process.exit(128);
}

//Routes
app.use("/",require("./routes"));

// mongoDB connection
require("./config/mongoDB")


app.listen(listeningPort, () => console.log(`Example app listening on port ${listeningPort}!`))
