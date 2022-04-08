import { Router, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import userMemory from "./auth.model";

const AuthRouter = Router();

AuthRouter.post("/signup", (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const userId = uuidV4();
        userMemory.push({
            id: userId,
            username,
            password,
        });
    } catch (error) {
        throw new Error("Server Error");
    }
});

export default AuthRouter;
