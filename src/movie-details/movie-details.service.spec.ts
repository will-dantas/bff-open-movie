import { Test, TestingModule } from '@nestjs/testing';
import { MovieDetailsService } from './movie-details.service';

describe('MovieDetailsService', () => {
  let service: MovieDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieDetailsService],
    }).compile();

    service = module.get<MovieDetailsService>(MovieDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
