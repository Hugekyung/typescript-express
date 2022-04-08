import { Router, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import UserMemory from "./auth.model";
import { userRequest } from "./dto/request.dto";
import { AuthService } from "./auth.serivece";

const AuthRouter = Router();

AuthRouter.post("/signup", (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const userId = uuidV4();
        const result = AuthService.createUser({ userId, username, password });

        if (!result) {
            throw new Error("create user Error");
        }

        console.log("UserMemory >>", UserMemory);
        res.status(201).json({ message: "user signup successfully! " });
    } catch (error) {
        throw new Error("Server Error");
    }
});

AuthRouter.post("/signin", (req: userRequest, res: Response) => {
    try {
        console.log("now userMemory>> ", UserMemory);
        const { username, password } = req.body;

        const user = UserMemory.find((user) => user.username === username);
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
