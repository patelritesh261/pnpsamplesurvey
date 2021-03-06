// multiple choice question template 
// Give an option to fill question and 4 option     
import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');

// DEFINE THE OBJECT SCHEMA
// multiple Question Schema
var mcqSchema = new mongoose.Schema({
    
    question: {
        type: String,
        default: '',
        trim: true,
        required: 'question is required'
    },
    option1: {
        type: String,
        default: '',
        trim: true,
        required: 'Option 1 is required'
    },
    option2: {
        type: String,
        default: '',
        trim: true,
        required: 'Option 2 is required'
    },
    option3: {
        type: String,
        default: '',
        trim: true,
        required: 'Option 3 is required'
    },
    option4: {
        type: String,
        default: '',
        trim: true,
        required: 'Option 4 is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    surveyName: {
        type: String,
        default: '',
        trim: true,
        required: 'Survey Name is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
},
    { collection: 'mcqInfo' });

//var options = ({missingPasswordError: "Wrong password"});
//mcqSchema.plugin(passportLocalMongoose, options);

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var Mcq = mongoose.model('Mcq', mcqSchema);