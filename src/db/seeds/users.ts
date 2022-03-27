import { User } from "@models/user.model";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("users").del();

  await knex<User>("users").insert([
    { name: "rodrigo", email: "rodmatheus99@gmail.com" },
    { name: "joão", email: "joão@gmail.com" },
    { name: "yone", email: "yone@gmail.com" },
    { name: "geovana", email: "geovana@gmail.com" },
    { name: "aline", email: "aline@gmail.com" },
  ]);
}
