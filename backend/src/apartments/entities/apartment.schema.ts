import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { SquareMeasure } from '../enum/squareMeasure.enum';
import { Currency } from '../enum/currency.enum';

export type UserDocument = HydratedDocument<Apartment>;

@Schema()
export class Apartment {
  @ApiProperty()
  @Prop({
    required: true,
  })
  title: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  address: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  description: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  phone: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  price: number;

  @ApiProperty()
  @Prop({
    required: true,
    enum: Currency,
    type: String,
  })
  currency: Currency;

  @ApiProperty()
  @Prop({
    required: true,
    enum: SquareMeasure,
    type: String,
  })
  squareMeasure: SquareMeasure;

  @ApiProperty()
  @Prop({
    required: true,
  })
  square: number;

  @ApiProperty()
  @Prop({
    required: true,
  })
  bedRooms: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  bathrooms: string;
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
