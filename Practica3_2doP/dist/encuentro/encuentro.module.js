"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroDeportivoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const encuentro_entity_1 = require("./entities/encuentro.entity");
const encuentro_service_1 = require("./encuentro.service");
const encuentro_controller_1 = require("./encuentro.controller");
let EncuentroDeportivoModule = class EncuentroDeportivoModule {
};
exports.EncuentroDeportivoModule = EncuentroDeportivoModule;
exports.EncuentroDeportivoModule = EncuentroDeportivoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([encuentro_entity_1.EncuentroDeportivo])],
        controllers: [encuentro_controller_1.EncuentroDeportivoController],
        providers: [encuentro_service_1.EncuentroDeportivoService],
    })
], EncuentroDeportivoModule);
//# sourceMappingURL=encuentro.module.js.map