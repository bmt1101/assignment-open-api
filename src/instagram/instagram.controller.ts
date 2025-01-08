import { Controller, Get, Param } from '@nestjs/common';
import { InstagramScraperService } from './instagram.service';

@Controller('instagram-scraper')
export class InstagramScraperController {
  constructor(private readonly instagramScraperService: InstagramScraperService) {}

  @Get(':username')
  async getReels(@Param('username') username: string) {
    return this.instagramScraperService.getInstagramReels(username);
  }
}
