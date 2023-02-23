import usersController from "../controllers/users";
import { Router } from "express";
import { validateRequestBody } from "zod-express-middleware";
import zodUserRequest from "../schemas/zod-UserRequest";

const router = Router();

router.post(
  "/",
  validateRequestBody(zodUserRequest.strict()),
  usersController.createUser
);
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put(
  "/:id",
  validateRequestBody(zodUserRequest.strict()),
  usersController.updateUser
);
router.delete("/:id", usersController.deleteUser);

export default router;
