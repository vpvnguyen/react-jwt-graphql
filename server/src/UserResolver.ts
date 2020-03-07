import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  //   crate mutation to CRUD with graphql

  @Mutation()
  register(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string
  ) {
    return;
  }
}
