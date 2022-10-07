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

router.get('/', getCarts);
router.get('/:id', getCart);
router.post('/', createCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);

router.post('/add-product', validateSchema(cartDetailSchema), addProductToCart);
router.post('/remove-product', validateSchema(cartDetailSchema), deleteProductFromCart);

export default router;
