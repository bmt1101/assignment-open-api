import { Test, TestingModule } from '@nestjs/testing';
import { InstagramScraperController } from './instagram.controller';

describe('InstagramController', () => {
  let controller: InstagramScraperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstagramScraperController],
    }).compile();

    controller = module.get<InstagramScraperController>(InstagramScraperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
