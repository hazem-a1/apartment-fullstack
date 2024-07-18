import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Apartment, ApartmentSchema } from './entities/apartment.schema';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
  exports: [ApartmentsService],
  imports: [
    MongooseModule.forFeature([
      { name: Apartment.name, schema: ApartmentSchema },
    ]),
  ],
})
export class ApartmentsModule {}
