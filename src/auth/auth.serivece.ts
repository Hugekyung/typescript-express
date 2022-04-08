import UserMemory from "./auth.model";

export class AuthService {
    userId: string;
    username: string;
    password: string;

    constructor({
        userId,
        username,
        password,
    }: {
        userId: string;
        username: string;
        password: string;
    }) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    static createUser({
        userId,
        username,
        password,
    }: {
        userId: string;
        username: string;
        password: string;
    }) {
        UserMemory.push({
            id: userId,
            username,
            password,
        });

        return true;
    }

    static findByUserName({ username }: { username: string }) {
        const user = UserMemory.find((user) => user.username === username);
        return user;
    }
}
