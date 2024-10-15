import { User } from './interface/user.interface';
export declare class UserService {
    private users;
    private id;
    getAll(): User[];
    getId(id: number): User;
    insert(body: any): void;
    update(id: number, body: any): void;
    delete(id: number): void;
}
