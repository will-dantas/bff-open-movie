import { Module } from '@nestjs/common';
import { MovieDetailsService } from './movie-details.service';
import { MovieDetailsController } from './movie-details.controller';

@Module({
  controllers: [MovieDetailsController],
  providers: [MovieDetailsService]
})
export class MovieDetailsModule {}
