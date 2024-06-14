"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroRepositoryImpl = void 0;
class EncuentroRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createEncuentroDto) {
        return this.datasource.create(createEncuentroDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(ID) {
        return this.datasource.findById(ID);
    }
    updateById(updateEncuentroDto) {
        return this.datasource.updateById(updateEncuentroDto);
    }
    deleteById(ID) {
        return this.datasource.deleteById(ID);
    }
}
exports.EncuentroRepositoryImpl = EncuentroRepositoryImpl;
