const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : {type : String ,require : true , unique : true},
    name : String,
    address : String,
    password : {
        type: String,
        require : true
    },
    marks : {
        maths : String,
        history : String
    }
},{timeseries : true})

UserSchema.pre("save",async()=>{
    try {
        if(!this.email)throw new Error("Email field is required!");
        if(!this.password)throw new Error("Password required!")
    } catch (error) {
        next(error);
    }
})

module.export = mongoose.model("User",UserSchema);