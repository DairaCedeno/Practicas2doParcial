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
exports.ApostadorController = void 0;
const common_1 = require("@nestjs/common");
const apostador_service_1 = require("./apostador.service");
const create_apostador_dto_1 = require("./dto/create-apostador.dto");
const update_apostador_dto_1 = require("./dto/update-apostador.dto");
let ApostadorController = class ApostadorController {
    constructor(apostadorService) {
        this.apostadorService = apostadorService;
    }
    create(createApostadorDto) {
        return this.apostadorService.create(createApostadorDto);
    }
    findAll() {
        return this.apostadorService.findAll();
    }
    findOne(id) {
        return this.apostadorService.findOne(id);
    }
    update(id, updateApostadorDto) {
        return this.apostadorService.update(id, updateApostadorDto);
    }
    async remove(id) {
        const apostador = await this.apostadorService.remove(id);
        return apostador;
    }
};
exports.ApostadorController = ApostadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apostador_dto_1.CreateApostadorDto]),
    __metadata("design:returntype", void 0)
], ApostadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApostadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApostadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_apostador_dto_1.UpdateApostadorDto]),
    __metadata("design:returntype", void 0)
], ApostadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApostadorController.prototype, "remove", null);
exports.ApostadorController = ApostadorController = __decorate([
    (0, common_1.Controller)('apostador'),
    __metadata("design:paramtypes", [apostador_service_1.ApostadorService])
], ApostadorController);
//# sourceMappingURL=apostador.controller.js.map