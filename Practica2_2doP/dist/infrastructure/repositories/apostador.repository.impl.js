"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorRepositoryImpl = void 0;
class ApostadorRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createApostadorDto) {
        return this.datasource.create(createApostadorDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(ID) {
        return this.datasource.findById(ID);
    }
    updateById(updateApostadorDto) {
        return this.datasource.updateById(updateApostadorDto);
    }
    deleteById(ID) {
        return this.datasource.deleteById(ID);
    }
}
exports.ApostadorRepositoryImpl = ApostadorRepositoryImpl;
