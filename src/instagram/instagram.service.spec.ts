import { Test, TestingModule } from '@nestjs/testing';
import { InstagramScraperService } from './instagram.service';

describe('InstagramService', () => {
  let service: InstagramScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstagramScraperService],
    }).compile();

    service = module.get<InstagramScraperService>(InstagramScraperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
