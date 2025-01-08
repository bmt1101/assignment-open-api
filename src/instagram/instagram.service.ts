import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class InstagramScraperService {
  constructor(private readonly httpService: HttpService) {}

  async getFollowers(username: string): Promise<any> {
    const url = `https://instagram-scraper-api2.p.rapidapi.com/v1/followers?username_or_id_or_url=${username}`;

    const options = {
      headers: {
        'x-rapidapi-key': 'c93ff496c3mshe9af35514327d60p156637jsn40c86fd4ced1',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
      },
    };

    try {
      const response = await lastValueFrom(this.httpService.get(url, options));
      return response.data;
    } catch (error) {
      throw new Error('Error fetching followers data');
    }
  }
}
