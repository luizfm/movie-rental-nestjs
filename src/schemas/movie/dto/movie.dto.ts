export interface MovieDto {
  _id: string;
  name: string;
  genre: string;
  timeDuration: number;
}

export type MovieType = Omit<MovieDto, '_id'>;
