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
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button 
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </header>

      {/* Upload Section */}
      <div className="mb-12">
        <div 
          {...getRootProps()} 
          className={`
            border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-stone-100 bg-stone-900' : 'border-stone-800 hover:border-stone-600 hover:bg-stone-900/50'}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-stone-900">
              {uploadMutation.isPending ? (
                <Loader2 className="w-8 h-8 animate-spin text-stone-400" />
              ) : (
                <Upload className="w-8 h-8 text-stone-400" />
              )}
            </div>
            <div>
              <p className="text-lg font-medium">
                {isDragActive ? "Drop images here" : "Drag & drop images here"}
              </p>
              <p className="text-stone-500 text-sm mt-1">or click to select files</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Management */}
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <ImageIcon size={20} />
        Manage Gallery ({images?.length || 0})
      </h2>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="w-8 h-8 animate-spin text-stone-500" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images?.map((img) => (
            <div key={img.key} className="relative group aspect-square bg-stone-900 rounded-lg overflow-hidden border border-stone-800">
              <img 
                src={img.url} 
                alt={img.key} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => deleteMutation.mutate(img.key)}
                  className="p-2 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all"
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
