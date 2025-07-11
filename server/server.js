const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const dotenv = require("dotenv");
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');

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
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)
app.use('/api/posts', require('./routes/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))