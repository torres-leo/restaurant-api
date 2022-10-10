import db from '../database/db';

const Product = db.product;

export const getProducts = async (req, res) => {
	try {
		let params = {};
		const { category } = req.query;
		if (category) {
			params = { category };
		}
		const products = await Product.findAll({
			where: { ...params },
		});
		res.status(200).json(products);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const getProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findOne({ where: { id } });

		if (!product) return res.status(404).json({ message: 'Product not Found' });
		res.json(product);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}
};

export const createProduct = async (req, res) => {
	try {
		const { name, price, description, category, discount, image } = req.body;
		const newProduct = await Product.create({
			name,
			description,
			price,
			category,
			discount,
			image,
		});

		res.status(200).json(newProduct);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, price, description, category, discount, image } = req.body;

		const product = await Product.findByPk(id);
		product.name = name;
		product.price = price;
		product.description = description;
		product.category = category;
		product.discount = discount;
		product.image = image;

		await product.save();
		res.json(product);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		await Product.destroy({
			where: {
				id,
			},
		});
		res.sendStatus(204);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};
