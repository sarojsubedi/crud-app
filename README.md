# CRUD App

A minimal TypeScript + Express + Prisma example demonstrating basic CRUD operations against a MongoDB database.

Why this project exists

- Small, practical example to show how to wire up Express routes with Prisma for MongoDB.
- Useful as a starter template for backend prototypes or learning Prisma with MongoDB.

Key files

- Main server and routes: [`index.ts`](index.ts) — see [`app`](index.ts) and [`prisma`](index.ts) usage.
- Prisma schema & data model: [`prisma/schema.prisma`](prisma/schema.prisma) — defines the [`model User`](prisma/schema.prisma).
- Project metadata & scripts: [`package.json`](package.json) — includes the [`dev` script](package.json) used for local development.
- Environment example: [`env.example`](env.example)
- TypeScript config: [`tsconfig.json`](tsconfig.json)
- Repo prompt used to generate this README: [.github/prompts/create-readme.propmt.md](.github/prompts/create-readme.propmt.md)

Features

- REST endpoints for users:
  - GET /users — list users (implemented in [`index.ts`](index.ts))
  - POST /users — create a user
  - PUT /users/:id — update a user
  - DELETE /users/:id — delete a user
- Simple Prisma + MongoDB model: [`model User`](prisma/schema.prisma)

Getting started

Prerequisites

- Node.js (recommended >= 18) or Bun (optional; package.json `start` uses Bun)
- MongoDB instance and connection string

Quick setup

1. Clone the repo and change into it.
2. Copy environment example:
   - cp env.example .env
   - Edit `.env` and set `DATABASE_URL` to your MongoDB connection string.
3. Install dependencies:
   - npm install
4. Generate Prisma client:
   - npx prisma generate
5. Run in development:
   - npm run dev
   - This runs the [`dev` script](package.json) which uses `nodemon` + `ts-node` to run [`index.ts`](index.ts).

Notes on Prisma + MongoDB

- The schema is in [`prisma/schema.prisma`](prisma/schema.prisma); the `User` model maps the MongoDB ObjectId via `@db.ObjectId`.
- If you need to push schema changes to the database:
  - npx prisma db push
  - Then regenerate the client: npx prisma generate

Usage examples

- List users

  - curl http://localhost:3000/users

- Create a user

  - curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'

- Update a user

  - curl -X PUT http://localhost:3000/users/<id> -H "Content-Type: application/json" -d '{"name":"Alice B."}'

- Delete a user
  - curl -X DELETE http://localhost:3000/users/<id>

Developer notes

- The server entrypoint is [`index.ts`](index.ts); the repository uses an inline `Users` TypeScript interface in that file (see [`Users` interface](index.ts)).
- Dev workflow uses `nodemon` + `ts-node` per [`package.json`](package.json). For production you may prefer to compile to JS and run in Node or use Bun as hinted by the `start` script.

Where to get help

- Open an issue in this repository.
- Inspect the code directly: [`index.ts`](index.ts) and [`prisma/schema.prisma`](prisma/schema.prisma).

Contributing

- Contributions are welcome. Please open issues or PRs for bug fixes and improvements.
- For larger contributor guidelines, add a `CONTRIBUTING.md` at the repository root and link to it from here.

License

- See the repository LICENSE file (not included in this workspace).
