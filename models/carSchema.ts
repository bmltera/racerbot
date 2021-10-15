const mongoose = require('mongoose');
export const carSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true},
    horsepower: { type: Number, require: true},
    weight: {type: Number, default: 3000},
    stage: {type: Number, default: 0},
    condition: {type: Number, default: 100},
});

export const model = mongoose.model('CarModels', carSchema);
module.exports = carSchema;