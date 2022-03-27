import { UserController } from "@controllers/user.controller";
import { Router } from "express";

export const router = Router();

const userController = new UserController();

router.get("/users", userController.findAll);
router.get("/users/:id", userController.findById);
router.post("/users", userController.create);
router.delete("/users/:id", userController.delete);
router.put("/users/:id", userController.update);
