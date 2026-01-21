import React, { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useDropzone } from 'react-dropzone';
import { getImages, uploadImage, deleteImage, logout } from '../lib/api';
import { Upload, Trash2, LogOut, Loader2, Image as ImageIcon } from 'lucide-react';

const AdminDashboard = () => {
  const queryClient = useQueryClient();

  const { data: images, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: getImages,
  });

  const uploadMutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries(['images']);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteImage,
    onSuccess: () => {
      queryClient.invalidateQueries(['images']);
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      uploadMutation.mutate(file);
    });
  }, [uploadMutation]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    }
  });

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <header className="flex justify-between items-end mb-16 border-b border-slate-200 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#cca43b] mb-2">Admin Panel</p>
            <h1 className="text-3xl font-bold text-[#1a4d2e]">Dashboard</h1>
          </div>
          <button 
            onClick={logout}
            className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors flex items-center gap-2 bg-red-50 px-4 py-2 rounded-sm hover:bg-red-100"
          >
            <LogOut size={16} />
            Logout
          </button>
        </header>

        {/* Upload Section */}
        <div className="mb-20">
          <div 
            {...getRootProps()} 
            className={`
              border-2 border-dashed rounded-sm p-16 text-center cursor-pointer transition-all duration-300
              ${isDragActive 
                ? 'border-[#1a4d2e] bg-emerald-50' 
                : 'border-slate-300 hover:border-[#1a4d2e] hover:bg-white'
              }
            `}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-6">
              <div className={`p-5 rounded-full ${isDragActive ? 'bg-[#1a4d2e] text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                {uploadMutation.isPending ? (
                  <Loader2 className="w-8 h-8 animate-spin" />
                ) : (
                  <Upload className="w-8 h-8" />
                )}
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">
                  {isDragActive ? "Drop images here" : "Drag & drop images here"}
                </p>
                <p className="text-slate-500 mt-2 text-sm font-medium">or click to select files</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Management */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ImageIcon className="text-[#1a4d2e]" />
            Gallery <span className="text-slate-400 text-sm font-normal ml-2">({images?.length || 0})</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#1a4d2e]" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {images?.map((img) => (
              <div key={img.key} className="relative group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-200 aspect-square overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.key} 
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => deleteMutation.mutate(img.key)}
                    className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all shadow-lg transform scale-75 group-hover:scale-100"
                    title="Delete image"
                  >
                    {deleteMutation.isPending && deleteMutation.variables === img.key ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Trash2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/95 border-t border-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <p className="text-[10px] text-slate-500 truncate text-center uppercase tracking-wider font-bold">
                    {img.key.split('-').slice(1).join('-')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
