import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class InstagramService {
  async getFollowing(username: string): Promise<any> {
    const options = {
      method: 'GET',
      url: `https://instagram-scraper-api2.p.rapidapi.com/v1/following`,
      params: { username_or_id_or_url: username },
      headers: {
        'x-rapidapi-key': 'c93ff496c3mshe9af35514327d60p156637jsn40c86fd4ced1',
        'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch Instagram data');
    }
  }
}
