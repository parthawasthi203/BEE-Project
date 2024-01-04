import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

//configure env
dotenv.config(); 

//database config
connectDB();

//rest objects
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes

//rest api
app.get('/',(req,res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>");
});

//port
const PORT = process.env.PORT || 4700;
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
})

