import { mergeResolvers } from "merge-graphql-schemas";

import authResolver from "./authResolver";
import userResolver from "./userResolver";
import projectResolver from "./projectResolver";

const resolvers = [authResolver, userResolver, projectResolver];

export default mergeResolvers(resolvers);
