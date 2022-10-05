import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRoutes from './routes/product.routes';
import cartRoutes from './routes/cart.routes';

dotenv.config();

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(productRoutes);
app.use(cartRoutes);

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
	console.log(`Server on port:`, app.get('PORT'));
});
