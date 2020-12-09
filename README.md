# Overview
The project is configured as a monorepo, with two seperate sub-projects (`api-db` and `api-npm`) included in the `packages` directory.

# Usage

The following commands can be run at the root of the project to perform the corresponding operations on all included monorepo sub-projects:
- Install all dependencies with `yarn install`
- Run the linter with `yarn lint`
- Build the applications (using the Typescript transpiler) with `yarn build`
- Launch both servers locally with `yarn start`

The `api-db` project requires a backing Postgres database.  In order to launch the database using Docker, run `docker-compose -f ./packages/api-db/docker-compose.yml up -d`

# CI/CD and Deployment

TODO
