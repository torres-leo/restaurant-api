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
import { cartDetailSchema, validateSchema } from '../validations';

const router = Router();

router.get('/cart', getCarts);
router.get('/cart/:id', getCart);
router.post('/cart', createCart);
router.put('/cart/:id', updateCart);
router.delete('/cart/:id', deleteCart);

router.post('/cart/add-product', validateSchema(cartDetailSchema), addProductToCart);
router.post('/cart/remove-product', validateSchema(cartDetailSchema), deleteProductFromCart);

export default router;
