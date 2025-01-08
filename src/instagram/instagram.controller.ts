import { Controller, Get, Param } from '@nestjs/common';
import { InstagramScraperService } from './instagram.service';

@Controller('instagram')
export class InstagramScraperController {
  constructor(private readonly instagramScraperService: InstagramScraperService) {}

  @Get('followers/:username')
  async getFollowers(@Param('username') username: string) {
    return this.instagramScraperService.getFollowers(username);
  }
}
