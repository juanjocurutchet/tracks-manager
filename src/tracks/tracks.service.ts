import { Injectable } from '@nestjs/common';
import { Tracks } from './tracks.interface';

const BASE_URL = "http://localhost:3030/tracks"
@Injectable()
export class TracksService {
    async getTracks(): Promise<Tracks[]> {
        const res = await fetch(BASE_URL);
        const parsed = res.json();
        return parsed;

    }
}
