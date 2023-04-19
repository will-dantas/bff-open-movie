import { Test, TestingModule } from '@nestjs/testing';
import { DatailsSearchController } from './datails-search.controller';
import { DatailsSearchService } from './datails-search.service';

describe('DatailsSearchController', () => {
  let controller: DatailsSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatailsSearchController],
      providers: [DatailsSearchService],
    }).compile();

    controller = module.get<DatailsSearchController>(DatailsSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
