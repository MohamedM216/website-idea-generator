import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Idea } from './schemas/idea.schema';

@Injectable()
export class IdeasService {
  constructor(@InjectModel(Idea.name) private ideaModel: Model<Idea>) {}

  async generateSections(prompt: string): Promise<string[]> {
    // In a real app, this would call an AI API
    // For now, return dummy sections based on prompt
    return [
      `Hero section for ${prompt}`,
      `About section for ${prompt}`,
      `Contact section for ${prompt}`,
    ];
  }

  async createIdea(prompt: string): Promise<Idea> {
    try {
      const sections = await this.generateSections(prompt);
      const newIdea = new this.ideaModel({ prompt, sections });
      return await newIdea.save();
    } catch (err) {
      throw new InternalServerErrorException('Failed to save idea');
    }
  }

  async getIdeas(): Promise<Idea[]> {
    return this.ideaModel.find().exec();
  }
}