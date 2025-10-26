import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({
    GET: "/users",
    POST: "/users",
    DELETE: "/users/:id",
    PUT: "/users/:id",
  });
});

interface Users {
  id: string;
  name: string;
  email: string;
}

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.post("/users", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.send(`User with id:${req.params.id} deleted successfully`);
});

app.put("/users/:id", async (req, res) => {
  const updateUser = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.send(updateUser);
});

app.listen(3000, () => {
  console.log("Server running at https://localhost:3000");
});
