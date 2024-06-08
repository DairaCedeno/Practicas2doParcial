import express, { Request, Response } from 'express';
import prisma from '../prisma';


const router = express.Router();

// GET all pronosticos
router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : 'Activo';
  const pronosticos = await prisma.pronostico.findMany({
    where: { estado },
  });
  res.json(pronosticos);
});

// POST a new pronostico
router.post('/', async (req: Request, res: Response) => {
  const newPronostico = await prisma.pronostico.create({
    data: req.body,
  });
  res.status(201).json(newPronostico);
});

// GET a single pronostico by ID
router.get('/:id', async (req: Request, res: Response) => {
  const pronostico = await prisma.pronostico.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (pronostico && pronostico.estado !== 'Eliminado') {
    res.json(pronostico);
  } else {
    res.status(404).send('Pronostico no encontrado');
  }
});

// PUT update an existing pronostico
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPronostico = await prisma.pronostico.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedPronostico);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pronostico' });
  }
});

// DELETE a pronostico (soft delete)
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedPronostico = await prisma.pronostico.update({
      where: { id: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el pronostico' });
  }
});

export default router;
