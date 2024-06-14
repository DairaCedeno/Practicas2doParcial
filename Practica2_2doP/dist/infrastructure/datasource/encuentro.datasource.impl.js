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
exports.EncuentroDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const encuentro_entity_1 = require("../../domain/entities/encuentro.entity");
class EncuentroDatasourceImpl {
    create(createEncuentroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const encuentro = yield postgres_1.prisma.encuentroDeportivo.create({
                data: createEncuentroDto
            });
            return encuentro_entity_1.EncuentroEntity.fromObject(encuentro);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const encuentros = yield postgres_1.prisma.encuentroDeportivo.findMany();
            return encuentros.map(encuentro => encuentro_entity_1.EncuentroEntity.fromObject(encuentro));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encuentro = yield postgres_1.prisma.encuentroDeportivo.findFirst({
                where: { id }
            });
            if (!encuentro)
                throw `Encuentro with ID ${id} not found`;
            return encuentro_entity_1.EncuentroEntity.fromObject(encuentro);
        });
    }
    updateById(updateEncuentroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateEncuentroDto.id);
            const updatedEncuentro = yield postgres_1.prisma.encuentroDeportivo.update({
                where: { id: updateEncuentroDto.id },
                data: updateEncuentroDto.values
            });
            return encuentro_entity_1.EncuentroEntity.fromObject(updatedEncuentro);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.encuentroDeportivo.delete({
                where: { id }
            });
            return encuentro_entity_1.EncuentroEntity.fromObject(deleted);
        });
    }
}
exports.EncuentroDatasourceImpl = EncuentroDatasourceImpl;
