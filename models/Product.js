const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: { type:String, required: true },
		productID:{ type: String, required: true, unique: true }, //sku
		desc:{ type: String, required: false },
		img: { type: String, required: false },
		category: { type: Array, required: false },
		size: { type: Array },
		color: { type: Array },
		price: { type: Number, required: false },
		cost: { type: Number, required: false },
		stockQuantity: { type: Number, default: 0 }
	}, 
	{timestamps: true}
);
//ActivitySchema

module.exports = mongoose.model("Product", ProductSchema);
