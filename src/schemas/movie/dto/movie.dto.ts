export interface MovieDto {
  name: string;
  genre: string;
  timeDuration: number;
}

export type MovieType = Omit<MovieDto, '_id'>;
