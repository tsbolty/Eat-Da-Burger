const express = require("express")
const burger = require("../models/burger")
const router = express.Router()

// CREATE THE "ROUTER" FOR THE APP
router.get("/", (req, res)=>{
    burger.all(function(data){
        const burgerObject = { burger: data }
        res.render("index", burgerObject)
    });
});

router.get("/burgers", (req, res)=>{

})



module.exports = Router