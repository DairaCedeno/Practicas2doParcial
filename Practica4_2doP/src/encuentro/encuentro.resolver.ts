import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EncuentroDeportivoService } from './encuentro.service'; 
import { EncuentroDeportivo } from './entities/encuentro.entity'; 
import { CreateEncuentroDeportivoInput } from './dto/create-encuentro.input'; 
import { UpdateEncuentroDeportivoInput } from './dto/update-encuentro.input'; 

@Resolver(() => EncuentroDeportivo)
export class EncuentroDeportivoResolver {
  constructor(private readonly encuentroService: EncuentroDeportivoService) {}

  @Mutation(() => EncuentroDeportivo)
  async createEncuentroDeportivo(
    @Args('createEncuentroDto') createEncuentroDto: CreateEncuentroDeportivoInput,
  ): Promise<EncuentroDeportivo> {
    return this.encuentroService.create(createEncuentroDto);
  }

  @Query(() => [EncuentroDeportivo], { name: 'encuentrosDeportivos' })
  async findAllEncuentrosDeportivos(): Promise<EncuentroDeportivo[]> {
    return this.encuentroService.findAll();
  }

  @Query(() => EncuentroDeportivo, { name: 'encuentroDeportivo' })
  async findOneEncuentroDeportivo(@Args('id', { type: () => ID }) id: number): Promise<EncuentroDeportivo> {
    return this.encuentroService.findOne(id);
  }

  @Mutation(() => EncuentroDeportivo)
  async updateEncuentroDeportivo(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateEncuentroDto') updateEncuentroDto: UpdateEncuentroDeportivoInput,
  ): Promise<EncuentroDeportivo> {
    return this.encuentroService.update(id, updateEncuentroDto);
  }

  @Mutation(() => EncuentroDeportivo)
  async removeEncuentroDeportivo(@Args('id', { type: () => ID }) id: number): Promise<EncuentroDeportivo> {
    return this.encuentroService.remove(id);
  }
}
