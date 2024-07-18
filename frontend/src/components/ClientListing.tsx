"use client";

import { useEffect, useRef, useState } from 'react';
import { useApartmentContext } from '@/store/ApartmentProvider';
import { ApartmentCard } from './apartment/apartmentCard';
import { Apartment } from '@/types/apartment';

export default function ClientApartment() {
  const { apartments, setApartments } = useApartmentContext();
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    try {
      void fetchApartments(limit, page*limit);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    if (!hasMore) {
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [hasMore]);

  async function fetchApartments(limit: number = 10, offset: number = 10) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartments?limit=${limit}&offset=${offset}`);
    const apartmentList = await res.json() as Apartment[];
    
    setApartments(apartments.concat(apartmentList));
    // If the number of apartment fetched is less than the requested size, we've reached the end of the feed
    if (apartmentList.length < limit) {
        setHasMore(false);
    }
  }

return (
    <div>
        {apartments.map((apartment) => (
            <ApartmentCard key={apartment._id} apartment={apartment} />
        ))}
        {hasMore ? (
          
            <div ref={loadMoreRef}>
              <svg  className="animate-spin animate-infinite animate-ease-out h-5 w-5 mr-3 " viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              </svg>
              </div>
        ) : (
            <div>{`You've reached the end of the feed.`}</div>
        )}
    </div>
);
}