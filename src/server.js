import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

server.start({ port: 3000 }, ({ port }) => {
  console.log("Server on port", port);
});
