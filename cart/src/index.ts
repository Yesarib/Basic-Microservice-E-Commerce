import dotenv from 'dotenv'
import express from 'express'
dotenv.config();

import cartRoutes from './routes/cart'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cart',cartRoutes);


const PORT:string = process.env.PORT || '5001'
app.listen(PORT, () => {
    console.log(`Server runining on ${PORT}`);
    
})