const mongoose = require ('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://<username>:<password>@ewaste.hwc0bd5.mongodb.net/?retryWrites=true&w=majority&appName=EWaste')
}
module.exports = connect;