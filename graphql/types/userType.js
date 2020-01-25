import gql from "graphql-tag";

export default gql`
	directive @auth on FIELD_DEFINITION

	type User {
		id: Int!
		email: String
		username: String
		password: String
		projects: [Project!]!
	}

	input UserInput {
		email: String
		username: String
		password: String
	}

	type Query {
		user(id: Int!): User
		users: [User] @auth
	}
`;
