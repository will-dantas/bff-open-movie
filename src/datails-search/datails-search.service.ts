import { Injectable } from '@nestjs/common';
import { DatailsSearch } from './entities/datails-search.entity';

@Injectable()
export class DatailsSearchService {
  async searchMovie(searchTerm: string): Promise<DatailsSearch[]> {
    const url = `${process.env.BASE_URL}/?s=${searchTerm}&page=1&apikey=${process.env.KEY}`;

    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      return this.mapToDatailsSearch(data.Search);
    } catch (error: any) {
      console.log(error);
    }
  }

  private async mapToDatailsSearch(dataSearchs: any): Promise<DatailsSearch[]> {
    const result = await dataSearchs.map(
      (dataSearch: any) =>
        new DatailsSearch(
          dataSearch.Title,
          dataSearch.Year,
          dataSearch.imdbID,
          dataSearch.Type,
          dataSearch.Poster,
        ),
    );

    return result;
  }
}
