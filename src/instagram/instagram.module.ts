import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';  // Import HttpModule from @nestjs/axios
import { InstagramScraperService } from './instagram.service';
import { InstagramScraperController } from './instagram.controller';

@Module({
  imports: [HttpModule],  // Make sure HttpModule is imported
  providers: [InstagramScraperService],
  controllers: [InstagramScraperController],
})
export class InstagramScraperModule {}