import express, { Request, Response } from "express";

const server = express();

server.use(express.json());

server.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello world!" });
});

server.listen(3000, () => {
    console.log("listening on port 3000...");
});
