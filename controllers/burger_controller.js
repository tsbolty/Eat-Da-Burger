const express = require("express")
const burger = require("../models/burger")
const router = express.Router()

// CREATE THE "ROUTER" FOR THE APP
router.get("/", (req, res)=>{
    burger.all(function(data){
        console.log(data)
        res.render("index", { burgers: data })
    });
});

router.post("/api/burgers", (req, res)=>{
    burger.create("burger_name", req.body, result=>{
        res.json({ id: result.insertId })
    })
});

router.put("/api/burgers/:id", (req, res)=>{
    const condition = `id = ${req.params.id}`

    burger.update({
        devoured: req.body.devoured
    }, condition, result=>{
        if (result.changedRows === 0){
            return res.status(404).end()
        }
        res.status(200).end()
    })
})

router.delete("/api/burgers/:id", (req, res)=>{
    const condition = `id = ${req.params.id}`

    burger.delete(condition, result=>{
        if(result.affectedRows === 0){
            return res.status(404).end()
        }
        res.status(200).end()
    });
});

module.exports = router