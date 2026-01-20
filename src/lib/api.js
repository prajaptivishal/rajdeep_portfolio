import Cookies from 'js-cookie';

export const login = async (password) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  Cookies.set('admin_token', data.token, { expires: 1 }); // 1 day
  return data;
};

export const logout = () => {
  Cookies.remove('admin_token');
  window.location.href = '/';
};

export const getImages = async () => {
  const res = await fetch('/api/images');
  if (!res.ok) throw new Error('Failed to fetch images');
  return res.json();
};

export const uploadImage = async (file) => {
  const token = Cookies.get('admin_token');
  const formData = new FormData();
  formData.append('file', file);
  
  const res = await fetch('/api/images', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });
  if (!res.ok) throw new Error('Upload failed');
  return res.json();
};

export const deleteImage = async (key) => {
  const token = Cookies.get('admin_token');
  const res = await fetch(`/api/images/${key}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Delete failed');
  return res.json();
};

export const isAuthenticated = () => {
  return !!Cookies.get('admin_token');
};
