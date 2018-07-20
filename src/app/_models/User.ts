import { Group } from "./group";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    friends?: User[];
    groups?: Group[];
}