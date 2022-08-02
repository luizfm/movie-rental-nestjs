import { MovieDto } from 'src/schemas/movie/dto/movie.dto';
import { UserDto } from 'src/schemas/user/dto/user.dto';

export interface OrderDto {
  user: UserDto;
  movies: MovieDto[];
  total: number;
  expected_return_date: Date;
}
