"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pronostico_entity_1 = require("./entities/pronostico.entity");
const pronostico_service_1 = require("./pronostico.service");
const pronostico_controller_1 = require("./pronostico.controller");
let PronosticoModule = class PronosticoModule {
};
exports.PronosticoModule = PronosticoModule;
exports.PronosticoModule = PronosticoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pronostico_entity_1.Pronostico])],
        controllers: [pronostico_controller_1.PronosticoController],
        providers: [pronostico_service_1.PronosticoService],
    })
], PronosticoModule);
//# sourceMappingURL=pronostico.module.js.map