const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const dotenv = require("dotenv")

dotenv.config()

// init app
const app = express()

// connect database
connectDB();

// Init Middleware
app.use(express.json())

// CORS configuration:
const allowedOrigins = [
    process.env.CLIENT_DEVELOPMENT_DOMAIN, 
    process.env.CLIENT_PRODUCTION_DOMAIN,  
];
app.use("*", cors({
    origin: allowedOrigins,
    credentials: true
}));

// Test route
app.get('/', (req,res) => res.send('API running'))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/posts', require('./routes/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))