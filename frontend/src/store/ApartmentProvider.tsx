"use client";

import { Apartment } from '@/types/apartment';
import React, { createContext, useContext, useState } from 'react';

interface ApartmentContextProps {
  apartments: Apartment[];
  setApartments: (apartments: Apartment[]) => void;
}

const defaultValue: ApartmentContextProps = {
  apartments: [],
  setApartments: (apartments: Apartment[]) => {},
};

const ApartmentContext = createContext<ApartmentContextProps>(defaultValue);

export const ApartmentsProvider= ({ children }: {
    children: React.ReactNode;
}) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  
  return (
    <ApartmentContext.Provider value={{ apartments, setApartments }}>
      {children}
    </ApartmentContext.Provider>
  );
};

export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);
  if (context === undefined) {
    throw new Error('usePostContext must be used within a ApartmentProvider');
  }
  return context;
};