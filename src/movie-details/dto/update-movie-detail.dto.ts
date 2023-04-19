import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDetailDto } from './create-movie-detail.dto';

export class UpdateMovieDetailDto extends PartialType(CreateMovieDetailDto) {}
