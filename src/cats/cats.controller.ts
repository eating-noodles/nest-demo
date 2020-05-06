import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/Cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {

    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Post('/create')
    async creatCat(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }


}
