export class MovieDetail {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly actors: string,
    readonly poster: string,
    readonly imdbRating: string,
    readonly year: string,
    readonly genre: string,
    readonly released?: string,
    readonly runtime?: string,
    readonly director?: string,
    readonly writer?: string,
    readonly language?: string,
    readonly country?: string,
    readonly awards?: string,
    readonly metascore?: string,
    readonly imdbVotes?: string,
    readonly type?: string,
    readonly Response?: string,
  ) {}
}
