require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const requireAuth = require('./middlewares/requireAuth')
const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.set("strictQuery", false)
const mongoUri = 'mongodb+srv://agrimarket:agrimartagrimart@cluster0.hw1kout.mongodb.net/'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
})

mongoose.connection.on('connected', () => {
    console.log("Connected to the mongo instance");
})

mongoose.connection.on("error", (err) => {
    console.error('Error connecting to mongo', err );
})

app.get('/', requireAuth, async (req,res) => {
    const user = await User.findById(req.user?._id).select('-password')
    res.send(user)
})

app.listen(4000, () => {
    console.log('listening on port 4000');
})