import { Currency } from "@/enum/currency.enum";
import { SquareMeasure } from "@/enum/squareMeasure.enum";

export interface Apartment {
  _id: string;
  title: string;
  address: string;
  description: string;
  phone: string;
  price: number;
  currency: Currency;
  squareMeasure: SquareMeasure;
  square: number;
  bedRooms: string;
  bathrooms: string;
}
