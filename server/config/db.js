const mongoose = require ('mongoose')

const connect = () => {
    return mongoose.connect(process.env.MONGODB_URI)
}
module.exports = connect;