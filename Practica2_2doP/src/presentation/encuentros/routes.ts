import { Router } from 'express';
import { EncuentroController } from '../../presentation/encuentros/controller';
import { EncuentroDatasourceImpl } from '../../infrastructure/datasource/encuentro.datasource.impl';
import { EncuentroRepositoryImpl } from '../../infrastructure/repositories/encuentro.repository.impl';

export class EncuentroRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new EncuentroDatasourceImpl();
    const encuentroRepository = new EncuentroRepositoryImpl(datasource);
    const encuentroController = new EncuentroController(encuentroRepository);

    router.get('/', encuentroController.getEncuentros);
    router.get('/:id', encuentroController.getEncuentroById);
    router.post('/', encuentroController.createEncuentro);
    router.put('/:id', encuentroController.updateEncuentro);
    router.delete('/:id', encuentroController.deleteEncuentro);

    return router;
  }
}
