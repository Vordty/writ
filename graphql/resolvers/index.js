import { mergeResolvers } from "merge-graphql-schemas";

import authResolver from "./authResolver";
import userResolver from "./userResolver";
import projectResolver from "./projectResolver";
import fileTreeResolver from "./fileTreeResolver";

const resolvers = [authResolver, userResolver, projectResolver, fileTreeResolver];

export default mergeResolvers(resolvers);
