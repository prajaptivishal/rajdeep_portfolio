import React from 'react';

const MasonryGrid = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-slate-400 py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
        <p className="text-lg">No designs uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((img) => (
        <div key={img.key} className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
          <img 
            src={img.url} 
            alt={img.key} 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {img.key.split('-').slice(1).join('-')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;