"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroDeportivoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const encuentro_entity_1 = require("./entities/encuentro.entity");
const typeorm_2 = require("@nestjs/typeorm");
let EncuentroDeportivoService = class EncuentroDeportivoService {
    constructor(encuentroDeportivoRepository) {
        this.encuentroDeportivoRepository = encuentroDeportivoRepository;
    }
    async create(createEncuentroDeportivoDto) {
        const encuentroDeportivo = this.encuentroDeportivoRepository.create(createEncuentroDeportivoDto);
        return this.encuentroDeportivoRepository.save(encuentroDeportivo);
    }
    async findAll() {
        return this.encuentroDeportivoRepository.find();
    }
    async findOne(id) {
        return this.encuentroDeportivoRepository.findOne({ where: { id } });
    }
    async update(id, updateEncuentroDeportivoDto) {
        await this.encuentroDeportivoRepository.update(id, updateEncuentroDeportivoDto);
        return this.encuentroDeportivoRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.encuentroDeportivoRepository.update(id, { estado: 'inactivo' });
        return this.encuentroDeportivoRepository.findOne({ where: { id } });
    }
};
exports.EncuentroDeportivoService = EncuentroDeportivoService;
exports.EncuentroDeportivoService = EncuentroDeportivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(encuentro_entity_1.EncuentroDeportivo)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EncuentroDeportivoService);
//# sourceMappingURL=encuentro.service.js.map