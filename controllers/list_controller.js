var express = require("express");
var list = require("../models/ultimateList.js");
var router = express.Router();

router.get("/", function(req, res){
    list.selectAll(function(data){
        var handlebarsObject = {
            list:data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

router.post("/api/list", function(req, res){
    list.create([
        "text", "finished"
    ],[
        req.body.text, false
    ], function(result) {
        console.log("router.post Called");
        res.json({id: result.insertId});
    });
});

router.delete("/api/list/:id", function(req, res){
    var condition = "id = " + req.params.id;
    
    list.delete(condition, function(result){
        if (result.affectedRows === 0){
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

router.put("/api/list/:id", function(req, res){
    var condition = "id = " + req.params.id;

    list.update({
        finished: req.body.finished
    }, condition, function(result){
        console.log("GAH!");
        res.status(200).end()
    })
})

module.exports = router;
