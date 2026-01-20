import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/api';
import MasonryGrid from '../components/MasonryGrid';
import { Loader2 } from 'lucide-react';

const Home = () => {
  const { data: images, isLoading, error } = useQuery({
    queryKey: ['images'],
    queryFn: getImages,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-stone-100 to-stone-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <p className="text-stone-400 max-w-lg mx-auto">
          A collection of my graphic design work.
        </p>
      </header>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-stone-500" />
        </div>
      ) : error ? (
        <div className="text-center text-red-400 py-10">
          Error loading portfolio. Please try again later.
        </div>
      ) : (
        <MasonryGrid images={images} />
      )}
    </div>
  );
};

export default Home;
