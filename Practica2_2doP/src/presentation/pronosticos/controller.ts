import { Request, Response } from 'express';
import { CreatePronosticoDto } from '../../domain/dtos/pronosticos/create-pronostico.dto';
import { UpdatePronosticoDto } from '../../domain/dtos/pronosticos/update-pronostico.dto';
import { PronosticoRepository } from '../../domain/repositories/pronostico.repository';

export class PronosticoController {

  constructor(private readonly pronosticoRepository: PronosticoRepository) { }

  public getPronosticos = async (req: Request, res: Response) => {
    try {
      const pronosticos = await this.pronosticoRepository.getAll();
      return res.status(200).json(pronosticos);
    } catch (error: any) {
      console.error('Error in getPronosticos:', error);
      res.status(500).json({ message: 'Error al obtener los pronosticos', error: error.message });
    }
  };

  public getPronosticoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const pronostico = await this.pronosticoRepository.findById(id);
      if (!pronostico) {
        return res.status(404).json({ message: `Pronostico con id ${id} no encontrado` });
      }
      return res.json(pronostico);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el pronostico', error: error.message });
    }
  };

  public createPronostico = async (req: Request, res: Response) => {
    try {
      const [error, createPronosticoDto] = CreatePronosticoDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const pronostico = await this.pronosticoRepository.create(createPronosticoDto!);
      return res.json(pronostico);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el pronostico', error: error.message });
    }
  };

  public updatePronostico = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updatePronosticoDto] = UpdatePronosticoDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const pronostico = await this.pronosticoRepository.updateById(updatePronosticoDto!);
      return res.json(pronostico);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el pronostico', error: error.message });
    }
  };

  public deletePronostico = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.pronosticoRepository.deleteById(id);
      return res.json({ message: 'Pronostico eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el pronostico', error: error.message });
    }
  };
}
