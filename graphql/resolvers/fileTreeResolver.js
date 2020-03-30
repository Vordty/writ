import GraphQLJSON, { GraphQLJSONObject } from "graphql-type-json";
import { findByProjectId, updateFileTree } from "../../services/fileTreeService";

const fileTreeResolver = {
	Query: {
		fileTree: (parent, args, context, info) => {
			return findByProjectId(1);
		}
	},

	Mutation: {
		updateFileTree: (parent, args, context, info) => {
			return updateFileTree(args);
		}
	},

	JSON: GraphQLJSON,
	JSONObject: GraphQLJSONObject
};

export default fileTreeResolver;
