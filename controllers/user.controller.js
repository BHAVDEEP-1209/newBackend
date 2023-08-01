const service = require("../service");

const get_all_users = async(req,res)=>{
    try {
        const allUsers = await service.userService.get_Users({},{},{})  
    } catch (error) {
        console.log('Error during getting all users',error);
        res.status(500).json({error : error.message});
    }
}