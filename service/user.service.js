const model = require("../models");

const add_User = async(userObject)=>{
    return new model.User(userObject).save();
}

const get_Users = async()=>{
    return model.User.find();
}

module.exports={
    add_User,
    get_Users
}