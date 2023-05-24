const express =require("express")

const Mensranking = require("../models/mens")
const router =require("./reouters/men")
const router = new XPathExpression.Router();


// we will handle post request
router.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new Mensraking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens)
       
    } catch (e) {
        res.status(400).send(e);
    }
})


// we will handle get request
router.get("/mens", async (req, res) => {
    try {
     
        const getMens = await Mensraking.find({}).sort();
        res.send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

// we will handle get request for indivisual
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await Mensraking.findById(_id);
        res.send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }
})


// we will handle patch request for indivisual
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await Mensraking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(getMens);
      
    } catch (e) {
        res.status(400).send(e);
    }

});
//  we will handle delete request for indivisual
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await Mensraking.findByIdAndDelete(_id);
        res.send(getMens);
      
    } catch (e) {
        res.status(400).send(e);
    }

});

module.exports = router;