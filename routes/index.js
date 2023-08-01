const router = require('express').Router()


router.get('/' , (req , res)=>{
   res.send("Testing Route Change!");
})


module.exports  = router