import { Test, TestingModule } from '@nestjs/testing';
import { DiaFestivoService } from './diafestivo.service';

describe('DiaFestivoService', () => {
  let service: DiaFestivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiaFestivoService],
    }).compile();

    service = module.get<DiaFestivoService>(DiaFestivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
