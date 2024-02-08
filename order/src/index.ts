import dotenv from 'dotenv'
import express from 'express'
dotenv.config();
import orderRoutes from './routes/order'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', orderRoutes);

const PORT:string = process.env.PORT || '5002';
app.listen(PORT, () => {
    console.log(`Server runining on ${PORT}`);
})