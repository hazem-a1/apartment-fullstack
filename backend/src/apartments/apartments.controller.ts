import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { IsObjectIdPipe } from 'src/common/pipe/is-object-id.pipe';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Apartment } from './entities/apartment.schema';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @ApiBody({
    type: CreateApartmentDto,
  })
  @Post()
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentsService.create(createApartmentDto);
  }

  @ApiResponse({
    isArray: true,
    type: Apartment,
  })
  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.apartmentsService.findAll(paginationQuery);
  }

  @ApiResponse({ type: Apartment })
  @Get(':id')
  async findOne(@Param('id', IsObjectIdPipe) id: string) {
    return this.apartmentsService.findOne(id);
  }
}
