import { Request, Response } from 'express';
import { CreateEncuentroDeportivoDto } from '../../domain/dtos/encuentros/create-encuentro.dto';
import { UpdateEncuentroDeportivoDto } from '../../domain/dtos/encuentros/update-encuentro.dto';
import { EncuentroRepository } from '../../domain/repositories/encuentro.repository';

export class EncuentroController {

  constructor(private readonly encuentroRepository: EncuentroRepository) { }

  public getEncuentros = async (req: Request, res: Response) => {
    try {
      const encuentros = await this.encuentroRepository.getAll();
      return res.status(200).json(encuentros);
    } catch (error: any) {
      console.error('Error in getEncuentros:', error);
      res.status(500).json({ message: 'Error al obtener los encuentros', error: error.message });
    }
  };

  public getEncuentroById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const encuentro = await this.encuentroRepository.findById(id);
      if (!encuentro) {
        return res.status(404).json({ message: `Encuentro con id ${id} no encontrado` });
      }
      return res.json(encuentro);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el encuentro', error: error.message });
    }
  };

  public createEncuentro = async (req: Request, res: Response) => {
    try {
      const [error, createEncuentroDto] = CreateEncuentroDeportivoDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const encuentro = await this.encuentroRepository.create(createEncuentroDto!);
      return res.json(encuentro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el encuentro', error: error.message });
    }
  };

  public updateEncuentro = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateEncuentroDto] = UpdateEncuentroDeportivoDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const encuentro = await this.encuentroRepository.updateById(updateEncuentroDto!);
      return res.json(encuentro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el encuentro', error: error.message });
    }
  };

  public deleteEncuentro = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.encuentroRepository.deleteById(id);
      return res.json({ message: 'Encuentro eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el encuentro', error: error.message });
    }
  };
}
