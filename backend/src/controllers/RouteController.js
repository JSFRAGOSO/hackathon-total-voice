// index, show, store, update, destroy
const Route = require('../models/Route');

module.exports = {
    async index(req,res){
        const route = await Route.find();
        return res.json(route);
    }, 
    async store(req,res){
        const {title} = req.body;
        
        const route = await Route.create({title});
        

        return res.status(201).json(route);
    }
}