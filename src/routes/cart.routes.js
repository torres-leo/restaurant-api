import { Router } from 'express';
import {
	getCarts,
	createCart,
	getCart,
	deleteCart,
	updateCart,
	addProductToCart,
	deleteProductFromCart,
} from '../controllers/cart.controller';

const router = Router();

router.get('/cart', getCarts);
router.get('/cart/:id', getCart);
router.post('/cart', createCart);
router.put('/cart/:id', updateCart);
router.delete('/cart/:id', deleteCart);

router.post('/cart/add-product', addProductToCart);
router.post('/cart/remove-product', deleteProductFromCart);

export default router;
