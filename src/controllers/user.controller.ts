import { UserRepository } from "@models/repositories/user.repository";
import { Request, response, Response } from "express";

export class UserController {
  async findAll(req: Request, res: Response) {
    const repository: UserRepository = new UserRepository();
    try {
      const data = await repository.findAll();
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: "Erro ao buscar usuários",
      });
    }
  }

  async findById(req: Request, res: Response) {
    const repository: UserRepository = new UserRepository();
    try {
      const data = await repository.findById(Number(req.params.id));
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: "Erro ao buscar usuários",
      });
    }
  }

  async create(req: Request, res: Response) {
    const { data } = req.body;
    const repository: UserRepository = new UserRepository();
    try {
      const user = await repository.create(data);
      return res.send(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: "Erro ao cadastrar usuário",
      });
    }
  }

  async update(req: Request, res: Response) {
    const { data } = req.body;
    const { id } = req.params;
    const repository: UserRepository = new UserRepository();
    try {
      const user = await repository.update(data, +id);
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(req: Request, res: Response) {
    const repository = new UserRepository();
    try {
      const { id } = req.params;
      await repository.delete(+id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(400).send({
        error: "Erro ao deletar usuário",
      });
    }
  }
}
