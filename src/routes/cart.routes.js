import { Router } from 'express';
import { getCarts, createCart, getCart, deleteCart } from '../controllers/cart.controller';

const router = Router();

router.get('/cart', getCarts);
router.get('/cart/:id', getCart);
router.post('/cart', createCart);
// router.put('/cart/:id', updateCart);
router.delete('/cart/:id', deleteCart);

export default router;
