import { Controller, Get, Param } from '@nestjs/common';
import { MovieDetailsService } from './movie-details.service';

@Controller('movie-details')
export class MovieDetailsController {
  constructor(private readonly movieDetailsService: MovieDetailsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieDetailsService.findMovieDatails(id);
  }
}
