import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movie.controller';
import { Movie, MovieSchema } from './movie.schema';
import { MovieService } from './movie.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MovieModule {}
