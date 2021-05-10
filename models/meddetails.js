const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MedSchema = new Schema({
    medType: {
        type: String,
        trim: true,
        required: true
    },
    frequencyTaken: {
        type: String,
        index: true,
        required: true
    },
    endDate: {
        type: String,
        index: true,
        required: true
    },
    numberPerDay: {
        type: String,
        index: true,
        required: true
    }
});

const Med = mongoose.model("Med", MedSchema);

module.exports = Med;
