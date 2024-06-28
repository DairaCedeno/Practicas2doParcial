import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ApostadorService } from './apostador.service';
import { Apostador } from './entities/apostador.entity';
import { CreateApostadorInput } from './dto/create-apostador.input';
import { UpdateApostadorInput } from './dto/update-apostador.input';

@Resolver(() => Apostador)
export class ApostadorResolver {
  constructor(private readonly apostadorService: ApostadorService) {}

  @Mutation(() => Apostador)
  async createApostador(
    @Args('createApostadorDto') createApostadorDto: CreateApostadorInput,
  ): Promise<Apostador> {
    return this.apostadorService.create(createApostadorDto);
  }

  @Query(() => [Apostador], { name: 'apostadores' })
  async findAllApostadores(): Promise<Apostador[]> {
    return this.apostadorService.findAll();
  }

  @Query(() => Apostador, { name: 'apostador' })
  async findOneApostador(@Args('id', { type: () => ID }) id: number): Promise<Apostador> {
    return this.apostadorService.findOne(id);
  }

  @Mutation(() => Apostador)
  async updateApostador(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateApostadorDto') updateApostadorDto: UpdateApostadorInput,
  ): Promise<Apostador> {
    return this.apostadorService.update(id, updateApostadorDto);
  }

  @Mutation(() => Apostador)
  async removeApostador(@Args('id', { type: () => ID }) id: number): Promise<Apostador> {
    return this.apostadorService.remove(id);
  }
}
