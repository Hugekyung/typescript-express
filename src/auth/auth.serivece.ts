import UserMemory from "./auth.model";

export class AuthService {
    static createUser({ userId, username, password }) {
        UserMemory.push({
            id: userId,
            username,
            password,
        });

        return true;
    }
}
