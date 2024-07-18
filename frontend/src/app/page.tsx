import { Skeleton } from "@/components/ui/skeleton";
import { Apartment } from "@/types/apartment";
import { Suspense } from "react";

import { ApartmentCard } from "@/components/apartment/apartmentCard";
import ClientApartment from "@/components/ClientListing";


export default async function Home() {

  const initialData = await fetchApartment();

  

  return (
    <main>
   <Suspense fallback={<Skeleton />}>
    <div>
    {initialData && initialData.length > 0 ? initialData.map((apartment) => (
      <ApartmentCard apartment={apartment} key={apartment._id} />
    )) : <Skeleton />}
    </div>
    <ClientApartment />
  </Suspense>
  </main>
  );
}

async function fetchApartment(limit: number =10, offset: number=0) {
  try {
  const res = await fetch(`${process.env.API_URL}/apartments?limit=${limit}&offset=${offset}`,{ cache: "no-store" });
  return  res.json() as Promise<Array<Apartment>>;
  } catch (error) {
      console.error(error);
  }
}