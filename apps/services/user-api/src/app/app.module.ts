import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { defaultOptions } from '../../ormconfig';
import { UserEntity } from '../entities/user.entity';
import { UserPublicController } from './controller/user-public.controller';
import { UserRepository } from './repository/users.repository';
import { UserService } from './service/user.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      entities: [
        UserEntity,
      ],
      type: 'postgres',
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmExModule.forCustomRepository([
      UserRepository,

    ]),
    HttpModule,
    PassportModule,
  ],
  controllers: [
    UserPublicController,
  ],
  providers: [
    UserService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
    consumer.apply(HeaderMiddleware).forRoutes('users');
    consumer.apply(ReadonlyMiddleware).forRoutes('*');
  }
}
