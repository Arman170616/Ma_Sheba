const BASE_URL = 'http://localhost:8000/api';
const MEDIA_URL = 'http://localhost:8000';

let authToken: string | null = localStorage.getItem('admin_token');

export function setToken(token: string | null) {
  authToken = token;
  if (token) localStorage.setItem('admin_token', token);
  else localStorage.removeItem('admin_token');
}

export function getToken() {
  return authToken;
}

export function mediaUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  return `${MEDIA_URL}${path}`;
}

function authHeaders() {
  const h: Record<string, string> = {};
  if (authToken) h['Authorization'] = `Token ${authToken}`;
  return h;
}

export async function loginAdmin(username: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Login failed');
  return data;
}

export async function logoutAdmin() {
  await fetch(`${BASE_URL}/auth/logout/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
  });
}

// News
export async function fetchNews() {
  const res = await fetch(`${BASE_URL}/news/`, { headers: authHeaders() });
  return res.json();
}

export async function createNews(data: object) {
  const res = await fetch(`${BASE_URL}/news/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create news');
  return res.json();
}

export async function updateNews(id: number | string, data: object) {
  const res = await fetch(`${BASE_URL}/news/${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update news');
  return res.json();
}

export async function deleteNews(id: number | string) {
  await fetch(`${BASE_URL}/news/${id}/`, { method: 'DELETE', headers: authHeaders() });
}

// Members
export async function fetchMembers() {
  const res = await fetch(`${BASE_URL}/members/`, { headers: authHeaders() });
  return res.json();
}

export async function createMember(formData: FormData) {
  const res = await fetch(`${BASE_URL}/members/`, {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to create member');
  return res.json();
}

export async function updateMember(id: number | string, data: object) {
  const res = await fetch(`${BASE_URL}/members/${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update member');
  return res.json();
}

export async function deleteMember(id: number | string) {
  await fetch(`${BASE_URL}/members/${id}/`, { method: 'DELETE', headers: authHeaders() });
}

// Board Members
export async function fetchBoardMembers() {
  const res = await fetch(`${BASE_URL}/board-members/`);
  return res.json();
}

// Gallery
export async function fetchGallery() {
  const res = await fetch(`${BASE_URL}/gallery/`, { headers: authHeaders() });
  return res.json();
}

export async function createGalleryItem(formData: FormData) {
  const res = await fetch(`${BASE_URL}/gallery/`, {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to create gallery item');
  return res.json();
}

export async function updateGalleryItem(id: number | string, data: object) {
  const res = await fetch(`${BASE_URL}/gallery/${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update gallery item');
  return res.json();
}

export async function deleteGalleryItem(id: number | string) {
  await fetch(`${BASE_URL}/gallery/${id}/`, { method: 'DELETE', headers: authHeaders() });
}
