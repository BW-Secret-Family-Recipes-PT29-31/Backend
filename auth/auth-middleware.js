const User = require("../users/users-model");

const checkAuthPayload = (req, res, next) => {
	const { username, email, password, confirm_password } = req.body;

	if (username === "" && email === "" && password === "" && confirm_password === "") {
		res.json({ message: "All input fields cannot be empty" });
	} else {
		if (username.length < 4) {
			next(
				res.json({
					success: false,
					message: "User name too short. It needs to be 4 characters or more",
				})
			);
		} else if (!validator.validate(email)) {
			next(
				res.json({
					success: false,
					message: "Email is invalid",
				})
			);
		} else if (password < 6) {
			next(
				res.json({
					success: false,
					message: "Password is too short. It needs to be 6 characters or more",
				})
			);
		} else if (password != confirm_password) {
			next(
				res.json({
					success: false,
					message: "Password do not match",
				})
			);
		} else {
			next();
		}
	}
};

const checkUsernameAvailable = async (req, res, next) => {
	const { username } = req.body;
	await User.findBy({ username })
		.then(([user]) => {
			if (user) {
				next(
					res.json({
						success: false,
						message: "Account already exist with this user name or email",
					})
				);
			} else {
				next();
			}
		})
		.catch(
			res.json({
				success: false,
				message: "Account already exist with this user name or email",
			})
		);
};

module.exports = { checkAuthPayload, checkUsernameAvailable };
