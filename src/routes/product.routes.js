import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/product.controller';

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id');
router.delete('/products/:id');
router.get('/products/:id');

export default router;
