import { User } from "./User";

export class Group {
    id: number;
    name: string;
    members? : User[];
}