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

router.post("/api/burgers", (req, res)=>{
    burger.create("burger_name", req.body.name, result=>{
        res.json({ id: result.insertId })
    })
});

router.delete("/api/burgers/:id", (req, res)=>{
    const condition = `id = ${req.params.id}`re

    burger.delete(condition, result=>{
        if(result.affectedRows === 0){
            return res.status(404).end()
        }
        res.status(200).end()
    })
})



module.exports = router