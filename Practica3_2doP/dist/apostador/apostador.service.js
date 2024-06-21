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
exports.ApostadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const apostador_entity_1 = require("./entities/apostador.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ApostadorService = class ApostadorService {
    constructor(apostadorRepository) {
        this.apostadorRepository = apostadorRepository;
    }
    async create(createApostadorDto) {
        const apostador = this.apostadorRepository.create(createApostadorDto);
        return this.apostadorRepository.save(apostador);
    }
    async findAll() {
        return this.apostadorRepository.find();
    }
    async findOne(id) {
        return this.apostadorRepository.findOne({ where: { id } });
    }
    async update(id, updateApostadorDto) {
        await this.apostadorRepository.update(id, updateApostadorDto);
        return this.apostadorRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.apostadorRepository.update(id, { estado: 'inactivo' });
        return this.apostadorRepository.findOne({ where: { id } });
    }
};
exports.ApostadorService = ApostadorService;
exports.ApostadorService = ApostadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(apostador_entity_1.Apostador)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ApostadorService);
//# sourceMappingURL=apostador.service.js.map