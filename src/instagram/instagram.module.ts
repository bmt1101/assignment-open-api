import { Module } from '@nestjs/common';
import { InstagramScraperService } from './instagram.service';
import { InstagramScraperController } from './instagram.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [InstagramScraperController],
  providers: [InstagramScraperService],
})
export class InstagramScraperModule {}
