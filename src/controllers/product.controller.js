import db from '../database/db';

const Product = db.product;

export const getProducts = async (req, res) => {
	try {
		const products = await Product.findAll();
		res.json(products);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createProduct = async (req, res) => {
	try {
		const { name, price, description, category, discount } = req.body;

		let info = {
			name,
			description,
			price,
			category,
			discount,
			image: req.file.path,
		};

		const newProduct = await Product.create(info);
		res.status(200).send(newProduct);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}

	res.send('Creating Product');
};
