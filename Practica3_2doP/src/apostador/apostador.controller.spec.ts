import { Test, TestingModule } from '@nestjs/testing';
import { ApostadorController } from './apostador.controller';
import { ApostadorService } from './apostador.service';

describe('ApostadorController', () => {
  let controller: ApostadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApostadorController],
      providers: [ApostadorService],
    }).compile();

    controller = module.get<ApostadorController>(ApostadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
