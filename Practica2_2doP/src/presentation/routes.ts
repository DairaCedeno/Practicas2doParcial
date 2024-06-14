import { Router } from 'express';
import { EncuentroRoutes } from './encuentros/routes';
import { PronosticoRoutes } from './pronosticos/routes'; 
import { ApostadorRoutes } from './apostadores/routes'; 
import { GitHubRoutes } from './github/github.routes';

const router = Router();

router.use('/encuentro', EncuentroRoutes.routes); 
router.use('/pronostico', PronosticoRoutes.routes); 
router.use('/apostador', ApostadorRoutes.routes);
router.use('/github', GitHubRoutes.routes); 

export const AppRoutes = { routes: router }; 
