import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users";
import ticketsRoutes from "./routes/tickets";

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/users", jsonParser, usersRoutes);
app.use("/api/tickets", jsonParser, ticketsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
