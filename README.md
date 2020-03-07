# react-jwt-graphql

JWT authentication using Node.js, Typescript, GraphQL, React, and PostgreSQL

- Tutorial: https://www.youtube.com/watch?v=25GS0MLT8JU (26:28)

## Backend

1. Setup a GraphQL Server using TypeGrapgQL and TypeORM
2. Register a user
3. Login and create access and refresh tokens
4. Authenticated mutations/queries
5. Refresh the token
6. Revoke tokens from a user

## Frontend

1. Setup Apollo and GraphQL Code Generator
2. React Router
3. Register/Login
4. Persisting session on refresh
5. Handling expired tokens
6. Fetching current user in header

7. npm i -g typeorm
8. `typeorm init --name server --database postgres`
   > this will create a server using postgres
