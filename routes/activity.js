const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const Activity = require("../models/Activity");
//ActivitySchema
//activity

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
	const newActivity = new Activity(req.body);
	try{
		//res.status(200).json("!!!!!!");
		const savedActivity = await newActivity.save();
		res.status(200).json(savedActivity);
	} catch (err) {
		res.status(500).json(err);
	}
}); 


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	try{
		//res.status(200).json("!!!!!!");
		const updatedActivity = await Activity.findByIdAndUpdate(
			req.params.id, 
			{ $set: req.body }, 
			{ new: true }
		);
		res.status(200).json(updatedActivity)
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Activity.findByIdAndDelete(req.params.id);
		res.status(200).json("Activity has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
})

//GET activity
router.get("/find/:id", async (req, res) => {
	const query = req.query.new
	try {
		const Activity = await Activity.findById(req.params.id);
		res.status(200).json( Activity );
	} catch (err) {
		res.status(500).json(err);
	}
})

//GET ALL activities
router.get("/", async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let Activitys;
		if(qNew) {
			Activitys = await Activity.find().sort({ createdAt: -1 }).limit(10); 
		} else if (qCategory) {
			Activitys = await Activity.find({
				category: {
					$in: [qCategory],
				},
			});
		} else {
			Activitys = await Activity.find();
		}

		res.status(200).json( Activitys );
	} catch (err) {
		res.status(500).json(err);
	}
})

/**/


module.exports = router;


