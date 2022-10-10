import db from '../database/db';

const Product = db.product;
const Cart = db.cart;
const Cart_detail = db.cart_detail;

export const getCarts = async (req, res) => {
	try {
		const carts = await Cart.findAll();
		res.status(200).json(carts);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const getCart = async (req, res) => {
	try {
		const { id } = req.params;
		const cart = await Cart.findOne({
			where: { id },
			include: {
				model: Product,
				through: {
					attributes: [],
				},
			},
		});

		if (!cart) return res.status(404).json({ message: 'cart not Found' });
		res.json(cart);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}
};

export const createCart = async (req, res) => {
	try {
		const newCart = await Cart.create();
		res.status(200).json(newCart);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const updateCart = async (req, res) => {
	try {
		const { id } = req.params;

		const cart = await Cart.findOne({ where: { id } });

		await cart.save();
		return res.json(cart);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}
};

export const deleteCart = async (req, res) => {
	try {
		const { id } = req.params;
		await Cart.destroy({
			where: {
				id,
			},
		});

		res.sendStatus(204);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const addProductToCart = async (req, res) => {
	try {
		const { cartId, productId } = req.body;
		const productCart = await Cart_detail.create({
			cartId,
			productId,
		});
		res.status(200).json(productCart);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const deleteProductFromCart = async (req, res) => {
	try {
		const { cartId, productId } = req.body;
		await Cart_detail.destroy({
			where: {
				cartId,
				productId,
			},
		});
		res.sendStatus(204);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};
