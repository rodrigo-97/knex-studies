import { UserRepository } from "@models/repositories/user.repository";

class UserService {
  private readonly repository: UserRepository;

  async findAll() {
    const data = await this.repository.findAll();

    console.log(data);
  }
}

export { UserService };
