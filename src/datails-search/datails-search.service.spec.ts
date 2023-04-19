import { Test, TestingModule } from '@nestjs/testing';
import { DatailsSearchService } from './datails-search.service';

describe('DatailsSearchService', () => {
  let service: DatailsSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatailsSearchService],
    }).compile();

    service = module.get<DatailsSearchService>(DatailsSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
