const mongoose = require('mongoose');

const Reg_Form_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
});

mongoose.model('Reg_Form', Reg_Form_Schema);