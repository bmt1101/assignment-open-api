import { Module } from '@nestjs/common';
import { InstagramScraperModule } from './instagram/instagram.module';

@Module({
  imports: [InstagramScraperModule],
})
export class AppModule {}
