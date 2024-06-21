import { Test, TestingModule } from '@nestjs/testing';
import { PronosticoController } from './pronostico.controller';
import { PronosticoService } from './pronostico.service';

describe('PronosticoController', () => {
  let controller: PronosticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PronosticoController],
      providers: [PronosticoService],
    }).compile();

    controller = module.get<PronosticoController>(PronosticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
