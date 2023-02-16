const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: false,
        trim: true,
        min: 3,
        max: 3
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    hash_password:{
        type: String,
        required:false
    }
}, {timestamps: true});

userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
})

module.exports = mongoose.model('Newuser',userSchema)