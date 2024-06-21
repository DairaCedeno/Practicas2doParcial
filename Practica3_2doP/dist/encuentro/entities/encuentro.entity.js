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
exports.EncuentroDeportivo = void 0;
const typeorm_1 = require("typeorm");
const pronostico_entity_1 = require("./../../pronostico/entities/pronostico.entity");
let EncuentroDeportivo = class EncuentroDeportivo {
};
exports.EncuentroDeportivo = EncuentroDeportivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], EncuentroDeportivo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], EncuentroDeportivo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], EncuentroDeportivo.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], EncuentroDeportivo.prototype, "lugar", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], EncuentroDeportivo.prototype, "equipoLocal", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], EncuentroDeportivo.prototype, "equipoVisitante", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: 'Programado' }),
    __metadata("design:type", String)
], EncuentroDeportivo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pronostico_entity_1.Pronostico, (pronostico) => pronostico.encuentroDeportivo),
    __metadata("design:type", Array)
], EncuentroDeportivo.prototype, "pronosticos", void 0);
exports.EncuentroDeportivo = EncuentroDeportivo = __decorate([
    (0, typeorm_1.Entity)('encuentroDeportivo')
], EncuentroDeportivo);
//# sourceMappingURL=encuentro.entity.js.map