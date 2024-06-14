import { Router } from 'express';
import { PronosticoController } from '../../presentation/pronosticos/controller';
import { PronosticoDatasourceImpl } from '../../infrastructure/datasource/pronostico.datasource.impl';
import { PronosticoRepositoryImpl } from '../../infrastructure/repositories/pronostico.repository.impl';

export class PronosticoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PronosticoDatasourceImpl();
    const pronosticoRepository = new PronosticoRepositoryImpl(datasource);
    const pronosticoController = new PronosticoController(pronosticoRepository);

    router.get('/', pronosticoController.getPronosticos);
    router.get('/:id', pronosticoController.getPronosticoById);
    router.post('/', pronosticoController.createPronostico);
    router.put('/:id', pronosticoController.updatePronostico);
    router.delete('/:id', pronosticoController.deletePronostico);

    return router;
  }
}
