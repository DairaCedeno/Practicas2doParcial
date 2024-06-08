import express, { Request, Response } from 'express';
import prisma from '../prisma';


const router = express.Router();

// GET all apostadores
router.get('/', async (req: Request, res: Response) => {
  const estado = req.query.estado ? String(req.query.estado) : 'Activo';
  const apostadores = await prisma.apostador.findMany({
    where: { estado },
  });
  res.json(apostadores);
});

// POST a new apostador
router.post('/', async (req: Request, res: Response) => {
  const newApostador = await prisma.apostador.create({
    data: req.body,
  });
  res.status(201).json(newApostador);
});

// GET a single apostador by ID
router.get('/:id', async (req: Request, res: Response) => {
  const apostador = await prisma.apostador.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (apostador && apostador.estado !== 'Eliminado') {
    res.json(apostador);
  } else {
    res.status(404).send('Apostador no encontrado');
  }
});

// PUT update an existing apostador
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updatedApostador = await prisma.apostador.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedApostador);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el apostador' });
  }
});

// DELETE an apostador (soft delete)
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const updatedApostador = await prisma.apostador.update({
      where: { id: parseInt(req.params.id) },
      data: { estado: 'Eliminado' },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el apostador' });
  }
});

export default router;
