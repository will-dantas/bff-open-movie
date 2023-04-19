import { Controller, Get, Body, Param } from '@nestjs/common';
import { DatailsSearchService } from './datails-search.service';

@Controller('datails-search')
export class DatailsSearchController {
  constructor(private readonly datailsSearchService: DatailsSearchService) {}

  @Get(':search')
  searchMovie(@Param('search') searchTerm: string) {
    return this.datailsSearchService.searchMovie(searchTerm);
  }
}
