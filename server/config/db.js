const mongoose = require ('mongoose')

const connect = () => {
    // return mongoose.connect('mongodb+srv://<username>:<password>@cluster0.l8qod.mongodb.net/Ewaste?retryWrites=true&w=majority')
    return mongoose.connect(process.env.MONGODB_URI)
}
module.exports = connect;