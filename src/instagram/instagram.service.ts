import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InstagramScraperService {
  private readonly baseUrl = 'https://instagram-scraper-api2.p.rapidapi.com'; 

  constructor(private readonly httpService: HttpService) {}

  async getInstagramReels(username: string): Promise<any> {
    const url = `/v1.2/reels?username_or_id_or_url=${username}`;
    const options = {
      headers: {
        'x-rapidapi-key': 'c93ff496c3mshe9af35514327d60p156637jsn40c86fd4ced1',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
      },
    };

    try {
      const response: AxiosResponse = await firstValueFrom(this.httpService.get(this.baseUrl + url, options));
      return response.data;
    } catch (error) {
      console.error('Error fetching Instagram data:', error.message || error);
      throw new Error('Failed to fetch Instagram data');
    }
  }
}
