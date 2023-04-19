import { Injectable } from '@nestjs/common';
import { MovieDetail } from './entities/movie-detail.entity';

@Injectable()
export class MovieDetailsService {
  async findMovieDatails(id: string): Promise<MovieDetail> {
    const url = `${process.env.BASE_URL}/?i=${id}&apikey=${process.env.KEY}`;

    try {
      const response = await fetch(`${url}`);
      const movieDetails = await response.json();

      return this.mapToMovieDetail(movieDetails);
    } catch (error: any) {
      console.log(error);
    }
  }

  private async mapToMovieDetail(movieDetails: any): Promise<MovieDetail> {
    const result = new MovieDetail(
      movieDetails.Title,
      movieDetails.Plot,
      movieDetails.Actors,
      movieDetails.Poster,
      movieDetails.imdbRating,
      movieDetails.Year,
      movieDetails.Genre,
      movieDetails.Released,
      movieDetails.Runtime,
      movieDetails.Director,
      movieDetails.Writer,
      movieDetails.Language,
      movieDetails.Country,
      movieDetails.Awards,
      movieDetails.Metascore,
      movieDetails.imdbVotes,
      movieDetails.Type,
      movieDetails.Response,
    );

    return result;
  }
}
