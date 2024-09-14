import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';

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
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class AppModule {}
