import React from 'react';

const MasonryGrid = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-stone-400 py-24 border border-dashed border-stone-200">
        <p className="text-lg font-light">No designs uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {images.map((img) => (
        <div key={img.key} className="break-inside-avoid relative group">
          <div className="overflow-hidden bg-stone-100">
            <img 
              src={img.url} 
              alt={img.key} 
              className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <p className="text-xs uppercase tracking-widest text-stone-500 truncate">
              {img.key.split('-').slice(1).join('-')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
