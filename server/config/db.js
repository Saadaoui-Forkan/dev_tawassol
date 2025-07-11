const mongoose = require('mongoose')

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI) 
      console.log('mongodb connected ...') 
    } catch (err) {
        console.error("connection to db failed! " + err.message)
    }
}

module.exports = connectDB