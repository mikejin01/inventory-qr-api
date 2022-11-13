const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: { type:String, required: true },
		sku:{ type: String, required: true, unique: true },
		desc:{ type: String, required: false },
		img: { type: String, required: false },
		category: { type: Array, required: false },
		size: { type: Array },
		color: { type: Array },
		price: { type: Number, required: false },
		cost: { type: Number, required: false },
		stockQuantity: { type: Number, default: 0 },
		reservedForCustomers:  { type: Number, default: 0 },
		stockQuantityVS: { type: Number, default: 0 },
		stockQuantityCP: { type: Number, default: 0 },
		type: { type: String, required: false }, //simple, complex, part
		numberOfBoxes: { type: Number, required: false },
		children: { type: Array, required: false },
		parents: { type: Array, required: false },
	}, 
	{timestamps: true}
);
//ActivitySchema

module.exports = mongoose.model("Product", ProductSchema);
