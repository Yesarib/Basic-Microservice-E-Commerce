// Dotenv 
import dotenv from 'dotenv'
dotenv.config();


import './helpers/init_mongodb'
import app from './app';




const PORT: string = process.env.PORT || "5000";
app.listen(PORT, () => {
    console.log(`Server runing on ${PORT}`);
})