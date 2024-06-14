"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("../../presentation/encuentros/controller");
const encuentro_datasource_impl_1 = require("../../infrastructure/datasource/encuentro.datasource.impl");
const encuentro_repository_impl_1 = require("../../infrastructure/repositories/encuentro.repository.impl");
class EncuentroRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new encuentro_datasource_impl_1.EncuentroDatasourceImpl();
        const encuentroRepository = new encuentro_repository_impl_1.EncuentroRepositoryImpl(datasource);
        const encuentroController = new controller_1.EncuentroController(encuentroRepository);
        router.get('/', encuentroController.getEncuentros);
        router.get('/:id', encuentroController.getEncuentroById);
        router.post('/', encuentroController.createEncuentro);
        router.put('/:id', encuentroController.updateEncuentro);
        router.delete('/:id', encuentroController.deleteEncuentro);
        return router;
    }
}
exports.EncuentroRoutes = EncuentroRoutes;
