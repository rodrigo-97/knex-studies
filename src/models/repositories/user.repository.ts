import { Repository } from "@models/repository";
import { User } from "@models/user.model";
import { db } from "src/db/connection";

class UserRepository implements Repository<User> {
  create(entity: User): Promise<Array<User>> {
    return db<User>("users")
      .insert({ ...entity })
      .returning("*");
  }

  update(entity: User, id: number): Promise<Array<User>> {
    return db<User>("users")
      .update({ ...entity })
      .where({ id })
      .returning("*");
  }

  delete(id: number): Promise<number> {
    return db<User>("users").delete().where({ id });
  }

  findById(id: number) {
    return db<User>("users").select("*").where({ id });
  }

  findAll() {
    return db<User>("users").select("*");
  }
}

export { UserRepository };
