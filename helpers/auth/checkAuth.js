import { AuthenticationError } from "apollo-server-express";

export const checkAuthentication = async req => {
	const userId = req.authUserId;
	if (userId) {
		return userId;
	} else {
		throw new AuthenticationError("Session expired, please login!");
	}
};
