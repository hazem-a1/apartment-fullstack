import { ApartmentCard } from "@/components/apartment/apartmentCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Apartment } from "@/types/apartment";
import { Suspense } from "react";

export default async function SingleApartment({
    params
}: {
    params: {
        id: string;
    }
}) {
    
    const res = await fetch(`${process.env.API_URL}/apartments/${params.id}`);
    const jsonResponse = await res.json() as Apartment;
    

    return (
        <Suspense fallback={<Skeleton/>}>
            <ApartmentCard apartment={jsonResponse}  disableLink/>
        </Suspense>    
    );
}

