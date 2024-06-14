"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("../../presentation/apostadores/controller");
const apostador_datasource_impl_1 = require("../../infrastructure/datasource/apostador.datasource.impl");
const apostador_repository_impl_1 = require("../../infrastructure/repositories/apostador.repository.impl");
class ApostadorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new apostador_datasource_impl_1.ApostadorDatasourceImpl();
        const apostadorRepository = new apostador_repository_impl_1.ApostadorRepositoryImpl(datasource);
        const apostadorController = new controller_1.ApostadorController(apostadorRepository);
        router.get('/', apostadorController.getApostadores);
        router.get('/:id', apostadorController.getApostadorById);
        router.post('/', apostadorController.createApostador);
        router.put('/:id', apostadorController.updateApostador);
        router.delete('/:id', apostadorController.deleteApostador);
        return router;
    }
}
exports.ApostadorRoutes = ApostadorRoutes;
