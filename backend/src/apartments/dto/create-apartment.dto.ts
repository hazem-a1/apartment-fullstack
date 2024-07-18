import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Currency } from '../enum/currency.enum';
import { SquareMeasure } from '../enum/squareMeasure.enum';

export class CreateApartmentDto {
  @ApiProperty({
    example:
      'شقه للبيع 165م في اسكندر ابراهيم بالاسكندريه فيو مفتوح علي البحر مباشره',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'اسكندر ابراهيم, الاسكندرية',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    example:
      'شقه للبيع 165م في اسكندر ابراهيم بالاسكندريه فيو مفتوح علي البحر مباشره',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: '01000000000',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    example: 1000000,
  })
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: Currency.EGP,
    enum: Currency,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({
    example: 165,
  })
  @IsNotEmpty()
  @IsPositive()
  square: number;

  @ApiProperty({
    example: SquareMeasure.M,
    enum: SquareMeasure,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(SquareMeasure)
  squareMeasure: SquareMeasure;

  @ApiProperty({
    example: '3',
  })
  @IsNotEmpty()
  @IsString()
  bedRooms: string;

  @ApiProperty({
    example: '2',
  })
  @IsNotEmpty()
  @IsString()
  bathrooms: string;
}
