import express, { Request, Response } from "express";
import AuthRouter from "./auth/auth.controller";

const server = express();

server.use(express.json());

server.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello world!" });
});

server.use("/auth", AuthRouter);

server.listen(3000, () => {
    console.log("listening on port 3000...");
});
