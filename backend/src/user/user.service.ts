import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
    private users : User [] = [
        
    ];
    private id = 0
    getAll() : User[] {
        return this.users;
    }

    getId(id: number): User {
        const userService = this.users.find( (item: User) => item.id == id);
        if(userService) {
            return userService;
        } else {
            throw new NotFoundException(`No encontramos el User ${id}`);
        }
    }

    insert(body: any) {
        this.users.push({id: this.id, ...body})
        this.id++
    }

    update(id: number, body: any) {
         
    }
    
    delete(id: number) {
        const userService = this.users.find((item: User) => item.id == id);
        if(userService) {
            this.users = this.users.filter( (item: User) => item.id != id );
        } else {
            throw new HttpException(`No existe el User ${id}`, HttpStatus.NOT_FOUND);
        }
    }
}
