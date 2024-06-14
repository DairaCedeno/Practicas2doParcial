"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("../../presentation/pronosticos/controller");
const pronostico_datasource_impl_1 = require("../../infrastructure/datasource/pronostico.datasource.impl");
const pronostico_repository_impl_1 = require("../../infrastructure/repositories/pronostico.repository.impl");
class PronosticoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new pronostico_datasource_impl_1.PronosticoDatasourceImpl();
        const pronosticoRepository = new pronostico_repository_impl_1.PronosticoRepositoryImpl(datasource);
        const pronosticoController = new controller_1.PronosticoController(pronosticoRepository);
        router.get('/', pronosticoController.getPronosticos);
        router.get('/:id', pronosticoController.getPronosticoById);
        router.post('/', pronosticoController.createPronostico);
        router.put('/:id', pronosticoController.updatePronostico);
        router.delete('/:id', pronosticoController.deletePronostico);
        return router;
    }
}
exports.PronosticoRoutes = PronosticoRoutes;
