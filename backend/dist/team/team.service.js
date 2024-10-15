"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
let TeamService = class TeamService {
    constructor() {
        this.teams = [];
        this.id = 0;
    }
    getAll() {
        return this.teams;
    }
    getId(id) {
        const teamService = this.teams.find((item) => item.id == id);
        if (teamService) {
            return teamService;
        }
        else {
            throw new common_1.NotFoundException(`No encontramos el team ${id}`);
        }
    }
    insert(body) {
        this.teams.push({ id: this.id, ...body });
        this.id++;
    }
    update(id, body) {
    }
    delete(id) {
        const teamService = this.teams.find((item) => item.id == id);
        if (teamService) {
            this.teams = this.teams.filter((item) => item.id != id);
        }
        else {
            throw new common_1.HttpException(`No existe el team ${id}`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    lastId() {
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)()
], TeamService);
//# sourceMappingURL=team.service.js.map