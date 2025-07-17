import { Body, Controller, Get, Post } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { Idea } from './schemas/idea.schema';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  async create(@Body() body: { prompt: string }): Promise<Idea> {
    return this.ideasService.createIdea(body.prompt);
  }

  @Get()
  async findAll(): Promise<Idea[]> {
    return this.ideasService.getIdeas();
  }
}