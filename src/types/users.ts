import zodUserRequest from "../schemas/zod-UserRequest";
import zodUser from "../schemas/zod-User";
import { z } from "zod";

export type UserRequest = z.infer<typeof zodUserRequest>;

export type User = z.infer<typeof zodUser>;
