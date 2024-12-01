const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

        username:{
            type: String,
            require:true,
            unique: true
        },
        password:{
            type: String,
            require: true,
        }
});

const user = mongoose.model('User',userSchema);

module.exports = user;