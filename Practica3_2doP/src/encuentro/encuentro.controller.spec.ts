import { Test, TestingModule } from '@nestjs/testing';
import { EncuentroDeportivoController } from './encuentro.controller';
import { EncuentroDeportivoService } from './encuentro.service';

describe('EncuentroDeportivoController', () => {
  let controller: EncuentroDeportivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuentroDeportivoController],
      providers: [EncuentroDeportivoService],
    }).compile();

    controller = module.get<EncuentroDeportivoController>(EncuentroDeportivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
