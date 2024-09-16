import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Board]),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 60,
    }),
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class AppModule {}
