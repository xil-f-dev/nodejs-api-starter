/**
 * Register controller
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @param {*} next Express middleware next
 */
exports.register = async (req, res, next) => {
	res.json({
		message: "register",
	});
};

/**
 * Login controller
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @param {*} next Express middleware next
 */
exports.login = async (req, res, next) => {
	res.json({
		message: "login",
	});
};
