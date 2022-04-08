import { Router, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import userMemory from "./auth.model";
import { userRequest } from "./dto/request.dto";

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

        res.status(201).json({ message: "user signup successfully! " });
    } catch (error) {
        throw new Error("Server Error");
    }
});

AuthRouter.post("/signin", (req: userRequest, res: Response) => {
    try {
        console.log("now userMemory>> ", userMemory);
        const { username, password } = req.body;

        const user = userMemory.find((user) => user.username === username);
        if (user && user.password === password) {
            req.user = user;
        }

        console.log("login user >>", req.user);

        res.status(200).json({
            message: `user login successfully ! hello ${username}`,
        });
    } catch (error) {
        throw new Error("Error");
    }
});

export default AuthRouter;
