import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { UserPublicController } from './user-public.controller';

describe('UserPublicController', () => {
  let controller: UserPublicController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [UserPublicController],
      providers: [ConfigService, Logger],
    }).compile();

    controller = module.get<UserPublicController>(UserPublicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Health Check', () => {
    it('should return UP', () => {
      expect(controller.getHealthCheck()).toEqual('UP');
    });
  });
});
