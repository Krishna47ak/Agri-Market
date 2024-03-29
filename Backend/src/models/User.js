const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pincode: {
        type: String
    },
    address: {
        type: String
    },
})

userSchema.pre('save', function(next) {
    const user = this
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err){
                next()
            }
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePaswword) {
    const user = this

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePaswword, user.password, (err, isMatch) => {

            if(err){
                return reject(err)
            }
            
            if(!isMatch) {
                return reject(false)
            }

            resolve(true)
        })
    })
}

mongoose.model('User', userSchema)