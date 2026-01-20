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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <button 
          onClick={logout}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </header>

      {/* Upload Section */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
          <Upload size={24} className="text-blue-600" />
          Upload New Work
        </h2>
        <div 
          {...getRootProps()} 
          className={`
            border-2 border-dashed rounded-3xl p-16 text-center cursor-pointer transition-all duration-300
            ${isDragActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50 shadow-sm hover:shadow-md'
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-6">
            <div className={`p-6 rounded-full ${isDragActive ? 'bg-blue-100' : 'bg-slate-50'}`}>
              {uploadMutation.isPending ? (
                <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
              ) : (
                <Upload className={`w-10 h-10 ${isDragActive ? 'text-blue-600' : 'text-slate-400'}`} />
              )}
            </div>
            <div>
              <p className="text-xl font-medium text-slate-900">
                {isDragActive ? "Drop images here" : "Drag & drop images here"}
              </p>
              <p className="text-slate-500 mt-2">or click to select files</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Management */}
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-800">
        <ImageIcon size={24} className="text-purple-600" />
        Manage Gallery ({images?.length || 0})
      </h2>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-10 h-10 animate-spin text-slate-400" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {images?.map((img) => (
            <div key={img.key} className="relative group aspect-square bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <img 
                src={img.url} 
                alt={img.key} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => deleteMutation.mutate(img.key)}
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transform scale-75 group-hover:scale-100 transition-all shadow-lg"
                  title="Delete image"
                >
                  {deleteMutation.isPending && deleteMutation.variables === img.key ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Trash2 className="w-5 h-5" />
                  )}
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