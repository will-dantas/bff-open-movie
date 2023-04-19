import { Module } from '@nestjs/common';
import { DatailsSearchService } from './datails-search.service';
import { DatailsSearchController } from './datails-search.controller';

@Module({
  controllers: [DatailsSearchController],
  providers: [DatailsSearchService],
})
export class DatailsSearchModule {}
