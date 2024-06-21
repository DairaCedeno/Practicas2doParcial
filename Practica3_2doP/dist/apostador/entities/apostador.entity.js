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
exports.Apostador = void 0;
const typeorm_1 = require("typeorm");
const pronostico_entity_1 = require("./../../pronostico/entities/pronostico.entity");
let Apostador = class Apostador {
};
exports.Apostador = Apostador;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Apostador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Apostador.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Apostador.prototype, "identificacion", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: 'Activo' }),
    __metadata("design:type", String)
], Apostador.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pronostico_entity_1.Pronostico, (pronostico) => pronostico.apostador),
    __metadata("design:type", Array)
], Apostador.prototype, "pronosticos", void 0);
exports.Apostador = Apostador = __decorate([
    (0, typeorm_1.Entity)('apostador')
], Apostador);
//# sourceMappingURL=apostador.entity.js.map