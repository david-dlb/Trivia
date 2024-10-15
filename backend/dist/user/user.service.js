"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [];
        this.id = 0;
    }
    getAll() {
        return this.users;
    }
    getId(id) {
        const userService = this.users.find((item) => item.id == id);
        if (userService) {
            return userService;
        }
        else {
            throw new common_1.NotFoundException(`No encontramos el User ${id}`);
        }
    }
    insert(body) {
        this.users.push({ id: this.id, ...body });
        this.id++;
    }
    update(id, body) {
    }
    delete(id) {
        const userService = this.users.find((item) => item.id == id);
        if (userService) {
            this.users = this.users.filter((item) => item.id != id);
        }
        else {
            throw new common_1.HttpException(`No existe el User ${id}`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map