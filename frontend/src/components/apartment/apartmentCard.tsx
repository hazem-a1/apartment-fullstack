import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Apartment } from "@/types/apartment"
import Link from "next/link";

export function ApartmentCard({
    apartment, disableLink= false
}:{
    apartment: Apartment,
    disableLink?: boolean
}) {
  return (
      <Card className="w-[350px] m-2" >
      <CardHeader>
        <CardTitle>{apartment.title}</CardTitle>
        <CardDescription>{apartment.description}</CardDescription>
      </CardHeader>
        <Link href={disableLink? `#`: `/${apartment._id}`}>
      <CardContent>
        
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <span className="text-sm text-gray-500">Price</span>
                <span className="text-lg font-semibold">{apartment.price} {apartment.currency}</span>
            </div>
            <div className="flex flex-col space-y-1.5">
                <span className="text-sm text-gray-500">m²</span>
                <span className="text-lg font-semibold">{apartment.square} {apartment.squareMeasure}</span>
            </div>
            <div className="flex flex-col space-y-1.5">
                <span className="text-sm text-gray-500">🚽</span>
                <span className="text-lg font-semibold">{apartment.bathrooms} bathrooms</span>
            </div>
            <div className="flex flex-col space-y-1.5">
                <span className="text-sm text-gray-500">🛌</span>
                <span className="text-lg font-semibold">{apartment.bedRooms} bedRooms</span>
            </div>
            
          </div>
      </CardContent>
    </Link>
      <CardFooter className="flex justify-between">
        <Link href={`tel:${apartment.phone}`}>
        <span className="text-gray-500">Call the owner {apartment.phone}</span>
        </Link>
      </CardFooter>
    </Card>
  )
}
