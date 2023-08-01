const mongoose = require("mongoose");

(async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL,{
            dbName : process.env.DATABASE_DATABASE
        })
        console.log("mongodb databse started!");
    } catch (error) {
        console.log(error.message);
    }
})()


mongoose.connection.on("connected",()=> console.log("Mongodb connection is on!"));
mongoose.connection.on("error",(err)=> console.log(err.message));
mongoose.connection.on("disconnected",()=> console.log("Mongodb database is diconnected!"));


process.on("SIGINT",async()=>{
    await mongoose.connection.close();
    process.exit(0);
})

module.exports = mongoose;

