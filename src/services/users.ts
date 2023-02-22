import users from "../data/users";
import { User } from "../types/users";

function getUsers() {
  return users;
}

function getUserById(id: number) {
  return users.find((user) => user.id === id);
}

function createUser(user: Omit<User, "id">) {
  const newUser = {
    id: users.length + 1,
    ...user,
  };
  users.push(newUser);
  return newUser;
}

function updateUser(id: number, user: Omit<User, "id">) {
  const index = users.findIndex((user) => user.id === id);
  const oldUser = users[index];
  const newUser = { ...oldUser, ...user };
  console.log({ index, oldUser, newUser });
  users[index] = newUser;
  return newUser;
}

function deleteUser(id: number) {
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
}

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
