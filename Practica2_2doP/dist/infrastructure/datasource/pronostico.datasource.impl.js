"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const pronostico_entity_1 = require("../../domain/entities/pronostico.entity");
class PronosticoDatasourceImpl {
    create(createPronosticoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const pronostico = yield postgres_1.prisma.pronostico.create({
                data: createPronosticoDto
            });
            return pronostico_entity_1.PronosticoEntity.fromObject(pronostico);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const pronosticos = yield postgres_1.prisma.pronostico.findMany();
            return pronosticos.map(pronostico => pronostico_entity_1.PronosticoEntity.fromObject(pronostico));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pronostico = yield postgres_1.prisma.pronostico.findFirst({
                where: { id }
            });
            if (!pronostico)
                throw `Pronostico with ID ${id} not found`;
            return pronostico_entity_1.PronosticoEntity.fromObject(pronostico);
        });
    }
    updateById(updatePronosticoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updatePronosticoDto.id);
            const updatedPronostico = yield postgres_1.prisma.pronostico.update({
                where: { id: updatePronosticoDto.id },
                data: updatePronosticoDto.values
            });
            return pronostico_entity_1.PronosticoEntity.fromObject(updatedPronostico);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.pronostico.delete({
                where: { id }
            });
            return pronostico_entity_1.PronosticoEntity.fromObject(deleted);
        });
    }
}
exports.PronosticoDatasourceImpl = PronosticoDatasourceImpl;
