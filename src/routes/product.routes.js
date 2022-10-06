import { Router } from 'express';
import { productSchema, validateSchema } from '../validations';
import {
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProduct,
} from '../controllers/product.controller';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', validateSchema(productSchema), createProduct);
router.put('/products/:id', validateSchema(productSchema), updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
