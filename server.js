require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/Routers');
const errorMiddleware = require('./middleware/errorMidlemare')
var cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.use('/api/Users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})
app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port http://localhost:${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})