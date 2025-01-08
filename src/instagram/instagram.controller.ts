import { Controller, Get, Param } from '@nestjs/common';
import { InstagramService } from './instagram.service';

@Controller('instagram')
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get('following/:username')
  async getFollowing(@Param('username') username: string) {
    try {
      const following = await this.instagramService.getFollowing(username);
      return following;
    } catch (error) {
      return { message: 'Error fetching data from Instagram API', error: error.message };
    }
  }
}
