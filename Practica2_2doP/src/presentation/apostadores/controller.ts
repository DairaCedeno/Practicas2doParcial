import { Request, Response } from 'express';
import { CreateApostadorDto } from '../../domain/dtos/apostadores/create-apostador.dto';
import { UpdateApostadorDto } from '../../domain/dtos/apostadores/update-apostador.dto';
import { ApostadorRepository } from '../../domain/repositories/apostador.repository';

export class ApostadorController {

  constructor(private readonly apostadorRepository: ApostadorRepository) { }

  public getApostadores = async (req: Request, res: Response) => {
    try {
      const apostadores = await this.apostadorRepository.getAll();
      return res.status(200).json(apostadores);
    } catch (error: any) {
      console.error('Error in getApostadores:', error);
      res.status(500).json({ message: 'Error al obtener los apostadores', error: error.message });
    }
  };

  public getApostadorById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const apostador = await this.apostadorRepository.findById(id);
      if (!apostador) {
        return res.status(404).json({ message: `Apostador con id ${id} no encontrado` });
      }
      return res.json(apostador);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el apostador', error: error.message });
    }
  };

  public createApostador = async (req: Request, res: Response) => {
    try {
      const [error, createApostadorDto] = CreateApostadorDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const apostador = await this.apostadorRepository.create(createApostadorDto!);
      return res.json(apostador);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el apostador', error: error.message });
    }
  };

  public updateApostador = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateApostadorDto] = UpdateApostadorDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const apostador = await this.apostadorRepository.updateById(updateApostadorDto!);
      return res.json(apostador);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el apostador', error: error.message });
    }
  };

  public deleteApostador = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.apostadorRepository.deleteById(id);
      return res.json({ message: 'Apostador eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el apostador', error: error.message });
    }
  };
}
