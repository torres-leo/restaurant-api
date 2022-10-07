'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'product',
			[
				{
					id: 'ab9a2ffa-c777-487f-9c8f-dd7ff0f8e221',
					name: 'full chicken grill',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item7.png',
					price: 45,
					category: 'CHICKEN',
					discount: 35,
				},
				{
					id: '20ecb13c-755e-45b0-91f4-0a3d5db0d2bf',
					name: 'Double Cheese Burger',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item1.png',
					price: 59,
					category: 'BURGER',
					discount: 50,
				},
				{
					id: 'abf8095a-34f5-49df-8458-1d2f494569fc',
					name: 'Chicken Cutlet',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item5.png',
					price: 32,
					category: 'CHICKEN',
				},
				{
					id: 'bb313128-d574-4418-bc6e-1ca2bc2a16e2',
					name: 'Noodles With Cheese',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item4.png',
					price: 60,
					category: 'NOODLES',
					discount: 30,
				},
				{
					id: '4908fae1-9bb6-44d1-9477-b5e97e0f3396',
					name: 'New Arrival Ice cream',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item9.png',
					price: 17,
					category: 'ICE_CREAM',
				},
				{
					id: 'ff1bc3f2-4346-4340-b763-274461c3ba8f',
					name: 'Glass of cola with ice',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item10.png',
					price: 25,
					category: 'DRINKS',
				},
				{
					id: '8e7ca219-08d9-477f-919b-8012f607031c',
					name: 'Seafood pizza',
					image: 'https://foodingly.netlify.app/assets/img/tab-img/item11.png',
					price: 18,
					category: 'DEFAULT',
					discount: 25,
				},
				{
					id: '70530fb1-9b2f-4acf-b97c-1d4aea5b2e38',
					name: 'Buttered Noodles',
					image:
						'https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2018/04/ButteredNoodes72dpirgbOOOH-1050x700.png',
					price: 50,
					category: 'NOODLES',
					discount: 18,
				},
				{
					id: '3946c9a1-dbcf-48af-b251-776207cf5cbe',
					name: 'LEANguini Lemon Parmesan',
					image:
						'https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2022/05/76961-ML_LNGLemonParm_72dpi_rgb_OLO_OH-1050x700.png',
					price: 55,
					category: 'NOODLES',
					discount: 20,
				},
				{
					id: '5df3155a-0749-484a-8ca0-d2ae8b5b0f05',
					name: 'Spaghetti & Meatballs',
					image:
						'https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2018/04/Spageatbas72dpirgbOOOH-1050x700.png',
					price: 50,
					category: 'NOODLES',
				},
				{
					id: 'bdf0b111-a19d-4a2a-b21f-d3df348f107c',
					name: 'MUSHROOM AND SWISS ANGUS BURGER',
					image:
						'https://www.hardees.com/-/media/project/cke/hardees/products/charboiled-burgers/hardees_site_705x742_mushroomswissthickburger/h_site_705x501_mushroomswissthickburger/cke_w4_mushroomswissangus_705x501.jpg',
					price: 15,
					category: 'BURGER',
					discount: 15,
				},
				{
					id: '8005d67e-2fa5-4444-99e3-ebaced33c9ba',
					name: 'DOUBLE WESTERN BACON CHEESEBURGER',
					image:
						'https://images.noodles.com/f00000000269542/www.noodles.com/wp-content/uploads/2018/04/Spageatbas72dpirgbOOOH-1050x700.png',
					price: 18,
					category: 'BURGER',
					discount: 10,
				},
				{
					id: 'a9d5fede-cf3f-4bf8-8457-29d1bc9e4350',
					name: 'MONSTER ANGUS BURGER',
					image:
						'https://www.hardees.com/-/media/project/cke/hardees/products/charboiled-burgers/hardees_site_705x742_monsterthickburger/h_site_705x501_monsterthickburger/cke_w4_monsterangus_705x501.jpg',
					price: 18,
					category: 'BURGER',
					discount: 15,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('products', null, {});
	},
};
