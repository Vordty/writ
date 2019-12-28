import { login, register } from "../../services/authService";
import { findByEmail, findByPk } from "../../services/userService";

import { LoginStatusEnum, SignupStatusEnum } from "../../helpers/enums/AuthStatusEnum";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/keys";

const authResolver = {
	Query: {
		getAuthedUser: (parent, args, context, info) => {
			return findByPk(context.authUserId);
		}
	},

	Mutation: {
		login: async (parent, args, context, info) => {
			const { email, password } = args;

			const user = await login(email, password);

			if (!user) {
				return LoginStatusEnum.FAILURE;
			}

			const options = {
				issuer: "hmm.com",
				expiresIn: "1h",
				algorithm: "HS256"
			};

			const token = jwt.sign({ id: user.id }, JWT_SECRET, options);

			return LoginStatusEnum.SUCCESS(token);
		},

		signup: async (parent, args, context, info) => {
			const { signupInput } = args;

			const user = await findByEmail(signupInput.email);
			if (user) {
				return SignupStatusEnum.FAILURE;
			}

			const newUser = register(signupInput);

			return SignupStatusEnum.SUCCESS(newUser);
		}
	}
};

export default authResolver;
