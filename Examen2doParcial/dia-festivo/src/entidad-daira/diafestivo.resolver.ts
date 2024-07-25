import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DiaFestivoService } from './diafestivo.service';
import { DiaFestivo } from './diafestivo.model';
import { CreateDiaFestivoInput } from './create-diafestivo.input';
import { UpdateDiaFestivoInput } from './update-diafestivo.input';

@Resolver(of => DiaFestivo)
export class DiaFestivoResolver {
  constructor(private readonly diaFestivoService: DiaFestivoService) {}

  @Query(returns => [DiaFestivo])
  async diaFestivos() {
    return this.diaFestivoService.findAll();
  }

  @Query(returns => DiaFestivo)
  async diaFestivo(@Args('id') id: number) {
    return this.diaFestivoService.findById(id);
  }

  @Mutation(returns => DiaFestivo)
  async createDiaFestivo(@Args('input') input: CreateDiaFestivoInput) {
    return this.diaFestivoService.create(input);
  }

  @Mutation(returns => DiaFestivo, { nullable: true })
  async updateDiaFestivo(
    @Args('id') id: number,
    @Args('input') input: UpdateDiaFestivoInput
  ) {
    return this.diaFestivoService.update(id, input);
  }

  @Mutation(returns => Boolean)
  async deleteDiaFestivoPhysical(@Args('id') id: number) {
    return this.diaFestivoService.deletePhysical(id);
  }

  @Mutation(returns => Boolean)
  async deleteDiaFestivoLogical(@Args('id') id: number) {
    return this.diaFestivoService.deleteLogical(id);
  }
}
