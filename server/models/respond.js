"use strict";
// this is the template for response when user responses from their mail
// it get all the information from the template and get the response from the user
var mongoose = require('mongoose');
// DEFINE THE OBJECT SCHEMA
// Respond Schema
var respondSchema = new mongoose.Schema({
    question: {
        type: String,
        default: '',
        trim: true,
        required: 'question is required'
    },
    answer: {
        type: String,
        default: '',
        trim: true,
        required: 'Option 1 is required'
    },
    senderName: {
        type: String,
        default: '',
        trim: true,
        required: 'Sender Name is required'
    },
    receiverName: {
        type: String,
        default: '',
        trim: true,
        required: 'Receiver Name is required'
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
}, { collection: 'respondInfo' });
//var options = ({missingPasswordError: "Wrong password"});
//mcqSchema.plugin(passportLocalMongoose, options);
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.Respond = mongoose.model('Respond', respondSchema);

//# sourceMappingURL=respond.js.map
