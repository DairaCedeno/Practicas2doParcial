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
exports.PronosticoController = void 0;
const common_1 = require("@nestjs/common");
const pronostico_service_1 = require("./pronostico.service");
const create_pronostico_dto_1 = require("./dto/create-pronostico.dto");
const update_pronostico_dto_1 = require("./dto/update-pronostico.dto");
let PronosticoController = class PronosticoController {
    constructor(pronosticoService) {
        this.pronosticoService = pronosticoService;
    }
    create(createPronosticoDto) {
        return this.pronosticoService.create(createPronosticoDto);
    }
    findAll() {
        return this.pronosticoService.findAll();
    }
    findOne(id) {
        return this.pronosticoService.findOne(id);
    }
    update(id, updatePronosticoDto) {
        return this.pronosticoService.update(id, updatePronosticoDto);
    }
    async remove(id) {
        const pronostico = await this.pronosticoService.remove(id);
        return pronostico;
    }
};
exports.PronosticoController = PronosticoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pronostico_dto_1.CreatePronosticoDto]),
    __metadata("design:returntype", void 0)
], PronosticoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PronosticoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PronosticoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pronostico_dto_1.UpdatePronosticoDto]),
    __metadata("design:returntype", void 0)
], PronosticoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PronosticoController.prototype, "remove", null);
exports.PronosticoController = PronosticoController = __decorate([
    (0, common_1.Controller)('pronostico'),
    __metadata("design:paramtypes", [pronostico_service_1.PronosticoService])
], PronosticoController);
//# sourceMappingURL=pronostico.controller.js.map