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
exports.ApostadorDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const apostador_entity_1 = require("../../domain/entities/apostador.entity");
class ApostadorDatasourceImpl {
    create(createApostadorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const apostador = yield postgres_1.prisma.apostador.create({
                data: createApostadorDto
            });
            return apostador_entity_1.ApostadorEntity.fromObject(apostador);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const apostadores = yield postgres_1.prisma.apostador.findMany();
            return apostadores.map(apostador => apostador_entity_1.ApostadorEntity.fromObject(apostador));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const apostador = yield postgres_1.prisma.apostador.findFirst({
                where: { id }
            });
            if (!apostador)
                throw `Apostador with ID ${id} not found`;
            return apostador_entity_1.ApostadorEntity.fromObject(apostador);
        });
    }
    updateById(updateApostadorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateApostadorDto.id);
            const updatedApostador = yield postgres_1.prisma.apostador.update({
                where: { id: updateApostadorDto.id },
                data: updateApostadorDto.values
            });
            return apostador_entity_1.ApostadorEntity.fromObject(updatedApostador);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.apostador.delete({
                where: { id }
            });
            return apostador_entity_1.ApostadorEntity.fromObject(deleted);
        });
    }
}
exports.ApostadorDatasourceImpl = ApostadorDatasourceImpl;
