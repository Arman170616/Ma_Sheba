export type Page =
  | 'home'
  | 'why-maseba'
  | 'about'
  | 'board'
  | 'services'
  | 'office'
  | 'news'
  | 'gallery'
  | 'admin-login'
  | 'admin-dashboard';

export interface Member {
  id: string;
  name: string;
  nameBn: string;
  designation: string;
  designationBn: string;
  phone: string;
  photo?: string;
  joinDate: string;
  showOnSite: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  titleBn: string;
  content: string;
  contentBn: string;
  date: string;
  category: string;
  image?: string;
  published: boolean;
}

export interface BoardMember {
  id: string;
  name: string;
  designation: string;
  photo?: string;
  order: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleBn: string;
  mediaType: 'image' | 'video';
  image?: string;
  videoUrl?: string;
  date: string;
  published: boolean;
  order: number;
}
