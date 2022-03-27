import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgres",
    connection: {
      host: "localhost",
      database: "users",
      port: 5000,
      user: "postgres",
      password: "postgres",
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};

export default config;
