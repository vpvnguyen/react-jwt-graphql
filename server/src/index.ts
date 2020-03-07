import "reflect-metadata";
import express from "express";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";

const PORT = 4000;

// lambda function which calls itself
(async () => {
  const app = express();

  // _req designates ignoring the first param
  app.get("/", (_req, res) => {
    res.send("hello");
  });

  // define graphql schema
  const apolloServer = new ApolloServer({
    // typeDefs: `
    //   type Query {
    //       hello: String!
    //   }
    //   `,
    // // object which contains mapping / data which schema needs
    // resolvers: {
    //   Query: {
    //     // needs to return a string
    //     hello: () => "hello world"
    //   }
    // }

    // use buildSchema function from type-graphql and pass in array of resolvers
    schema: await buildSchema({
      resolvers: [UserResolver]
    })
  });

  // add graphql server
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Express server started on ${PORT}`);
  });
})();

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
