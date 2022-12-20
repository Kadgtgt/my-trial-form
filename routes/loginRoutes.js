const express = require("express");
const router = express.Router();

const Registration = require("../model/User");

router.get("/", (req, res) => {
	res.render("login");
});

router.post("/", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await Registration.register(register, req.body.email, (err) => {
		if (err) {
			res.status(400).render("login");
			console.log(err);
		} else {
			res.redirect("/");
		}
	});
});

module.exports = router;
