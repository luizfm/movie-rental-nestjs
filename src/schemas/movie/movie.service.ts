import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieDto, MovieType } from './dto/movie.dto';
import { Movie, MovieDocument } from './movie.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovie: MovieType): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovie);
    return createdMovie.save();
  }

  async findAll(): Promise<MovieDto[]> {
    return this.movieModel.find().exec();
  }

  async findOneById(id: string): Promise<MovieDto> {
    return this.movieModel.findById({ _id: id }).catch(() => {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    });
  }

  async updateById(id, movieDetails: MovieType) {
    return this.movieModel
      .findOneAndUpdate({ _id: id }, movieDetails, {
        new: true,
      })
      .catch(() => {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      });
  }

  async deleteById(id: string): Promise<MovieDto> {
    return this.movieModel.findByIdAndDelete({ _id: id }).catch(() => {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    });
  }
}
