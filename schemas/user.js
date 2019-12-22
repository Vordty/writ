import gql from "graphql-tag";

export default gql`
	type User {
		id: Int!
		firstName: String
		lastName: String
	}

	input UserInput {
		firstName: String
		lastName: String
	}

	type Query {
		user(id: Int!): User
		users: [User]
	}

	type Mutation {
		createUser(userInput: UserInput!): User!
	}
`;
