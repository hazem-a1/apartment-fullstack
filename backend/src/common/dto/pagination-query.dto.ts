import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsPositive, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsPositive()
  @Type(() => Number)
  @ApiProperty({ default: 10, required: false })
  readonly limit: number;

  @Min(0)
  @Type(() => Number)
  @ApiProperty({ default: 0, required: false })
  readonly offset: number;
}
