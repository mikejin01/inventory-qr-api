const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
	{
		QRID: { type:String, required: true, unique: true },
		sku:{ type: String, required: true },
		desc:{ type: String, required: false },
		status: { type: String, required: true }, //Code Generated, Stocked In, Stocked Out
		price: { type: Number, required: false },
		cost: { type: Number, required: false },
		quantity: { type: Number, default: 0 }
	}, 
	{timestamps: true}
);


module.exports = mongoose.model("Activity", ActivitySchema);