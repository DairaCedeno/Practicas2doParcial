import { Router } from 'express';
import { ApostadorController } from '../../presentation/apostadores/controller';
import { ApostadorDatasourceImpl } from '../../infrastructure/datasource/apostador.datasource.impl';
import { ApostadorRepositoryImpl } from '../../infrastructure/repositories/apostador.repository.impl';

export class ApostadorRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new ApostadorDatasourceImpl();
    const apostadorRepository = new ApostadorRepositoryImpl(datasource);
    const apostadorController = new ApostadorController(apostadorRepository);

    router.get('/', apostadorController.getApostadores);
    router.get('/:id', apostadorController.getApostadorById);
    router.post('/', apostadorController.createApostador);
    router.put('/:id', apostadorController.updateApostador);
    router.delete('/:id', apostadorController.deleteApostador);

    return router;
  }
}
