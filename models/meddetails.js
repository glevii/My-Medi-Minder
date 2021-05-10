const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MedSchema = new Schema({
    medTypeQuestion: {
        type: String,
        trim: true, 
        required: true
    },
    medType: {
        type: String,
        trim: true,
        required: true
    },
    freqQuestion: {
        type: String,
        index: true,
        required: true
    },
    frequencyTaken: {
        type: String,
        index: true,
        required: true
    },
    endDateQuestion: {
        type: String,
        index: true,
        required: true
    },
    endDate: {
        type: String,
        index: true,
        required: true
    },
    numberPerDayQuestion: {
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
