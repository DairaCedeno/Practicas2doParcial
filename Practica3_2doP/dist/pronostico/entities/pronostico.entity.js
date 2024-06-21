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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pronostico = void 0;
const typeorm_1 = require("typeorm");
const encuentro_entity_1 = require("./../../encuentro/entities/encuentro.entity");
const apostador_entity_1 = require("./../../apostador/entities/apostador.entity");
let Pronostico = class Pronostico {
};
exports.Pronostico = Pronostico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Pronostico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Pronostico.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Pronostico.prototype, "resultadoEsperado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => encuentro_entity_1.EncuentroDeportivo, (encuentroDeportivo) => encuentroDeportivo.pronosticos),
    __metadata("design:type", encuentro_entity_1.EncuentroDeportivo)
], Pronostico.prototype, "encuentroDeportivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apostador_entity_1.Apostador, (apostador) => apostador.pronosticos),
    __metadata("design:type", apostador_entity_1.Apostador)
], Pronostico.prototype, "apostador", void 0);
exports.Pronostico = Pronostico = __decorate([
    (0, typeorm_1.Entity)('pronostico')
], Pronostico);
//# sourceMappingURL=pronostico.entity.js.map