import { PartialType } from '@nestjs/mapped-types';
import { CreateDatailsSearchDto } from './create-datails-search.dto';

export class UpdateDatailsSearchDto extends PartialType(CreateDatailsSearchDto) {}
