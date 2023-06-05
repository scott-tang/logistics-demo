## Getting setup
`yarn install`

`npm run start`

## Creating a Nest JS Project

To generate a NestJS Project with Swagger JS and Default Configurations, run `npm run create-nestjs-project` and input something similar:
```bash
=======================================
     Running Create NestJS Project
=======================================
[Set Project Name]: test-project
[Set Maintainer Name]: John Doe
[Set ENV Prefix (Regex: ^[A-Z_0-9]*$)]: TEST_PROJECT
[Set Swagger Title]: Test Project API
[Set Swagger Description]: Test Project Integration APIs
[Set Swagger Tag]: Test Project Integration APIs
[Set Swagger URL Prefix (Regex: ^[a-z\-]*$)]: test-project
[Include Typeorm? (Y/N)]: Y
[Set ECR Repo Name (Regex: ^[a-z\-]*$)]: test-project-service
```

If TypeORM is also generated, then update the {{PROJECT_NAME}}/src/app/app.module for your required TypeORM Entities.
```bash
TypeOrmModule.forRoot({
    ...defaultOptions,
    entities: [{{Entity1}}, {{Entity2}}],
    type: 'postgres',
}))
```

You can run these commands for the TypeORM CLI:
```bash
# Creating a Migration
npx nx run {{PROJECT_NAME}}:create-migration --name=Test

# Generating Migration
npx nx run {{PROJECT_NAME}}:generate-migration --name=Test

# Running Migrations
npx nx run {{PROJECT_NAME}}:run-migrations

# Reverting Migrations
npx nx run {{PROJECT_NAME}}:revert-migrations
```

To delete the generated NestJS Project, and it related NX files, then run `npx nx g remove {{PROJECT_NAME}}`

## Running it
Then if you run `npm run start` (Runs Default Project) it will attach a debugger automatically (note this may require restarting vscode).
To run specific NestJS projects, then run `npx nx run {{PROJECT_NAME}}:serve` instead. 

### Mono-repository
This solution uses [nx.dev](http://nx.dev) to allow for a mono-repo (ie single git repository) of our code base. Note that there is a separate gitops repo for infrastructure.

The benefits of a single repo are that we can build the entire solution locally very simply without complex setup of each environment.

