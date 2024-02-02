import dotenv from 'dotenv'
import express from 'express'

dotenv.config();
const app = express();

const PORT:string = process.env.PORT || '5001'
app.listen(PORT, () => {
    console.log(`Server runining on ${PORT}`);
    
})