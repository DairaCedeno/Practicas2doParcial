import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PronosticoService } from './pronostico.service';
import { Pronostico } from './entities/pronostico.entity';
import { CreatePronosticoInput } from './dto/create-pronostico.input';
import { UpdatePronosticoInput } from './dto/update-pronostico.input';

@Resolver(() => Pronostico)
export class PronosticoResolver {
  constructor(private readonly pronosticoService: PronosticoService) {}

  @Mutation(() => Pronostico)
  async createPronostico(
    @Args('createPronosticoInput') createPronosticoInput: CreatePronosticoInput,
  ): Promise<Pronostico> {
    return this.pronosticoService.create(createPronosticoInput);
  }

  @Query(() => [Pronostico], { name: 'pronosticos' })
  async findAll(): Promise<Pronostico[]> {
    return this.pronosticoService.findAll();
  }

  @Query(() => Pronostico, { name: 'pronostico' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Pronostico> {
    return this.pronosticoService.findOne(id);
  }

  @Mutation(() => Pronostico)
  async updatePronostico(
    @Args('updatePronosticoInput') updatePronosticoInput: UpdatePronosticoInput,
  ): Promise<Pronostico> {
    return this.pronosticoService.update(updatePronosticoInput.id, updatePronosticoInput);
  }

  @Mutation(() => Pronostico)
  async removePronostico(@Args('id', { type: () => ID }) id: number): Promise<Pronostico> {
    return this.pronosticoService.remove(id);
  }
}


