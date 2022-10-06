import Joi from 'joi';

export const productSchema = Joi.object().keys({
	name: Joi.string().required(),
	price: Joi.number().required(),
	image: Joi.string().required(),
	category: Joi.string().required().valid('CHICKEN', 'BURGER', 'ICE_CREAM', 'DRINKS', 'NOODLES'),
	discount: Joi.number().integer(),
});

export const cartDetailSchema = Joi.object().keys({
	cartId: Joi.string().required(),
	productId: Joi.string().required(),
});

export const validateSchema = (schema) => {
	return async (req, res, next) => {
		try {
			await schema.validateAsync(req.body);
			next();
		} catch (error) {
			res.send(error.message);
		}
	};
};
