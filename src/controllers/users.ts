import { Request, Response } from "express";
import { UserRequest } from "../generated";
import usersService from "../services/users";
import { ApiRequest } from "../types/http";

export default {
  getUsers: async (req: Request, res: Response) => {
    const users = await usersService.getUsers();
    res.send(users);
  },
  updateUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body;
    console.log({ user, b: req.body });
    const updatedUser = await usersService.updateUser(Number(id), user);
    res.send(updatedUser);
  },
  createUser: async (req: ApiRequest<UserRequest>, res: Response) => {
    const user = req.body;
    const newUser = await usersService.createUser(user);
    res.send(newUser);
  },
  getUserById: async (req: ApiRequest<UserRequest>, res: Response) => {
    const { id } = req.params;
    const user = await usersService.getUserById(Number(id));
    res.send(user);
  },
  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    await usersService.deleteUser(Number(id));
    res.send("User deleted");
  },
};
