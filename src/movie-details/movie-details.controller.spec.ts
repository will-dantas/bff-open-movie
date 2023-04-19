import { Test, TestingModule } from '@nestjs/testing';
import { MovieDetailsController } from './movie-details.controller';
import { MovieDetailsService } from './movie-details.service';

describe('MovieDetailsController', () => {
  let controller: MovieDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieDetailsController],
      providers: [MovieDetailsService],
    }).compile();

    controller = module.get<MovieDetailsController>(MovieDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
