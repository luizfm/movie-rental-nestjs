import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieDto, MovieType } from './dto/movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MovieService) {}

  @Get()
  async findAll(): Promise<MovieDto[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<MovieDto> {
    return this.moviesService.findOneById(id);
  }

  @Post()
  async create(@Body() createMovie: MovieType): Promise<MovieType> {
    return this.moviesService.create(createMovie);
  }

  @Put(':id')
  async updateMovieById(
    @Param('id') id: string,
    @Body() updatedMovieDetails: MovieType,
  ): Promise<MovieType> {
    return this.moviesService.updateById(id, updatedMovieDetails);
  }

  @Delete(':id')
  async deleteMovieById(@Param('id') id: string): Promise<MovieDto> {
    return this.moviesService.deleteById(id);
  }
}
