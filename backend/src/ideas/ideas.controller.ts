import { Body, Controller, Get, Post, HttpException, HttpStatus } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { Idea } from './schemas/idea.schema';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  async create(@Body() body: { prompt: string }): Promise<Idea> {
    try {
      if (!body?.prompt?.trim()) {
        throw new HttpException(
          'Prompt cannot be empty', 
          HttpStatus.BAD_REQUEST
        );
      }
      return await this.ideasService.createIdea(body.prompt);
    } catch (error) {
      throw new HttpException(
        {
          status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.response?.error || 'Failed to create idea',
          details: error.message || undefined
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error
        }
      );
    }
  }

  @Get()
  async findAll(): Promise<Idea[]> {
    try {
      const ideas = await this.ideasService.getIdeas();
      if (ideas.length === 0) {
        throw new HttpException(
          'No ideas found', 
          HttpStatus.NOT_FOUND
        );
      }
      return ideas;
    } catch (error) {
      throw new HttpException(
        {
          status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.response?.error || 'Failed to fetch ideas',
          details: error.message || undefined
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error
        }
      );
    }
  }
}