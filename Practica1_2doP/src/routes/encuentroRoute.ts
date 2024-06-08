import express, { Request, Response } from 'express';
import prisma from '../prisma';


const router = express.Router();

// GET all encuentros deportivos
router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : 'Activo';
  const encuentros = await prisma.encuentroDeportivo.findMany({
    where: { estado },
  });
  res.json(encuentros);
});

// POST a new encuentro deportivo
router.post('/', async (req: Request, res: Response) => {
  const newEncuentro = await prisma.encuentroDeportivo.create({
    data: req.body,
  });
  res.status(201).json(newEncuentro);
});

// GET a single encuentro deportivo by ID
router.get('/:id', async (req: Request, res: Response) => {
  const encuentro = await prisma.encuentroDeportivo.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (encuentro && encuentro.estado !== 'Eliminado') {
    res.json(encuentro);
  } else {
    res.status(404).send('Encuentro deportivo no encontrado');
  }
});

// PUT update an existing encuentro deportivo
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedEncuentro = await prisma.encuentroDeportivo.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedEncuentro);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el encuentro deportivo' });
  }
});

// DELETE an encuentro deportivo (soft delete)
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedEncuentro = await prisma.encuentroDeportivo.update({
      where: { id: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el encuentro deportivo' });
  }
});

export default router;
