import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product'
import categoryRoutes from './routes/category'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);




export default app;