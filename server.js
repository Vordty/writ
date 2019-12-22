const express = require("express");

import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

import db from "./models";
import typeDefs from "./schemas";
import resolvers from "./resolvers";

const app = express();

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const apolloServer = new ApolloServer({
	schema
});

apolloServer.applyMiddleware({ app });

db.sequelize.sync().then(() => {
	db.User.create({
		firstName: "hmmkaca",
		lastName: "hmmkacas gvari"
	});
	app.listen({ port: 4000 }, () => console.log("Listening..."));
});
