import { mergeTypes } from "merge-graphql-schemas";

import authType from "./authType";
import userType from "./userType";
import projectType from "./projectType";

const types = [authType, userType, projectType];

export default mergeTypes(types, { all: true });
