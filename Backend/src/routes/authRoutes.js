const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const { name, email, mobile, password } = req.body
    try {
        const user = new User({ name, email, mobile, password, pincode: "", address: "" })
        await user.save()
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message)
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email or password' })
    }

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(422).send({ error: 'Invalid email or password' })
    }

    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY', { expiresIn: 172800 })
        res.send({ token })
    } catch (err) {
        return res.status(422).send({ error: 'Invalid email or password' })
    }

})

router.put('/profile-edit', async (req, res) => {
    const { name, email, mobile, pincode, address } = req.body

    if (!name || !email || !mobile) {
        return res.status(422).send({ error: 'Must provide name, email and mobile number' })
    }


    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(422).send({ error: 'Invalid email' })
        }
        user.name = name
        user.mobile = mobile
        user.pincode = pincode
        user.address = address
        await user.save()
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

module.exports = router