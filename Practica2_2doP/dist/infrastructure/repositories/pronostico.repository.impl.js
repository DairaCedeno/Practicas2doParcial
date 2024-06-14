"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoRepositoryImpl = void 0;
class PronosticoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createPronosticoDto) {
        return this.datasource.create(createPronosticoDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(ID) {
        return this.datasource.findById(ID);
    }
    updateById(updatePronosticoDto) {
        return this.datasource.updateById(updatePronosticoDto);
    }
    deleteById(ID) {
        return this.datasource.deleteById(ID);
    }
}
exports.PronosticoRepositoryImpl = PronosticoRepositoryImpl;
