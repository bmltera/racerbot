const mongoose = require('mongoose');
const carSchema = require("./carSchema");

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    username: {type: String, require: true},
    money: {type: Number, default: 1000},
    currentCar: {type: carSchema, default: undefined},
    carList: {type: Array, default: undefined},
});

const model = mongoose.model('ProfileModels', profileSchema);
module.exports = model;