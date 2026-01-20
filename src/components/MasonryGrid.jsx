import React from 'react';

const MasonryGrid = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-stone-500 py-20">
        <p>No designs uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
      {images.map((img) => (
        <div key={img.key} className="break-inside-avoid relative group overflow-hidden rounded-lg bg-stone-900">
          <img 
            src={img.url} 
            alt={img.key} 
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium text-sm px-2 text-center">{img.key.split('-').slice(1).join('-')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
