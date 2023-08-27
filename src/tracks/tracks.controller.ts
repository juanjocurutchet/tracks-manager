import { Controller, Get } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { Tracks } from './tracks.interface';

@Controller('tracks')
export class TracksController {
constructor(private readonly tracksService: TracksService){}
    @Get()
    getTracks(): Promise<Tracks[]> {
        return this.tracksService.getTracks();
    }
}

