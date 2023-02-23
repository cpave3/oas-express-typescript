import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users";
import ticketsRoutes from "./routes/tickets";

const app = express();

const jsonParser = bodyParser.json();

app.use("/api/users", jsonParser, usersRoutes);
app.use("/api/tickets", jsonParser, ticketsRoutes);

export default app;
