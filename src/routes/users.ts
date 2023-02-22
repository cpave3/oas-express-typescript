import usersController from "../controllers/users";
import { Router } from "express";

const router = Router();

router.post("/", usersController.createUser);
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
