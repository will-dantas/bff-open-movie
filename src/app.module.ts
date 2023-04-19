import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatailsSearchModule } from './datails-search/datails-search.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatailsSearchModule, MovieDetailsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
