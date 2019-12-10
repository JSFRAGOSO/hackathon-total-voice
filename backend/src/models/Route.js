const {Schema,model} = require('mongoose');

const RouteSchema = new Schema({
    title:{
        type:String,
        required:true
    }
},{
    timestamps:true   
}
);

module.exports = model('Route', RouteSchema);