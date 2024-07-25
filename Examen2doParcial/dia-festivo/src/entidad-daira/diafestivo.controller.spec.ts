import { Test, TestingModule } from '@nestjs/testing';
import { DiaFestivoController } from './diafestivo.controller';

describe('DiaFestivoController', () => {
  let controller: DiaFestivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiaFestivoController],
    }).compile();

    controller = module.get<DiaFestivoController>(DiaFestivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
