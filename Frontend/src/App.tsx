import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyMaSeba from './pages/WhyMaSeba';
import About from './pages/About';
import Board from './pages/Board';
import Services from './pages/Services';
import Office from './pages/Office';
import News from './pages/News';
import Gallery from './pages/Gallery';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { Page, Member, NewsItem, BoardMember, GalleryItem } from './types';
import * as api from './api';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isAdmin, setIsAdmin] = useState(!!api.getToken());
  const [members, setMembers] = useState<Member[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const mapMember = (m: any): Member => ({
    id: String(m.id), name: m.name, nameBn: m.name_bn,
    designation: m.designation, designationBn: m.designation_bn,
    phone: m.phone, photo: m.photo || undefined,
    joinDate: m.join_date, showOnSite: m.show_on_site,
  });

  const mapNews = (n: any): NewsItem => ({
    id: String(n.id), title: n.title, titleBn: n.title_bn,
    content: n.content, contentBn: n.content_bn,
    date: n.date, category: n.category, image: n.image || undefined, published: n.published,
  });

  const mapGallery = (g: any): GalleryItem => ({
    id: String(g.id), title: g.title, titleBn: g.title_bn,
    mediaType: g.media_type, image: g.image || undefined,
    videoUrl: g.video_url || undefined, date: g.date,
    published: g.published, order: g.order,
  });

  useEffect(() => {
    api.fetchNews().then(data => setNews(data.map(mapNews)));
    api.fetchBoardMembers().then(data => setBoardMembers(
      data.map((b: any) => ({ id: String(b.id), name: b.name, designation: b.designation, photo: b.photo || undefined, order: b.order }))
    ));
    api.fetchMembers().then(data => setMembers(data.map(mapMember)));
    api.fetchGallery().then(data => setGallery(data.map(mapGallery)));
  }, []);

  useEffect(() => {
    if (isAdmin) {
      api.fetchMembers().then(data => setMembers(data.map(mapMember)));
      api.fetchGallery().then(data => setGallery(data.map(mapGallery)));
    }
  }, [isAdmin]);

  const handleLogin = (success: boolean) => {
    if (success) { setIsAdmin(true); setPage('admin-dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  };

  const handleLogout = async () => {
    await api.logoutAdmin(); api.setToken(null); setIsAdmin(false); setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (p: Page) => {
    if (p === 'admin-dashboard' && !isAdmin) setPage('admin-login');
    else setPage(p);
  };

  // Members
  const addMember = async (m: Member, photoFile?: File) => {
    const fd = new FormData();
    fd.append('name', m.nameBn); fd.append('name_bn', m.nameBn);
    fd.append('designation', m.designationBn); fd.append('designation_bn', m.designationBn);
    fd.append('phone', m.phone); fd.append('join_date', m.joinDate);
    fd.append('show_on_site', 'true');
    if (photoFile) fd.append('photo', photoFile);
    const created = await api.createMember(fd);
    setMembers(prev => [mapMember(created), ...prev]);
  };

  const toggleMemberVisibility = async (id: string) => {
    const m = members.find(x => x.id === id); if (!m) return;
    await api.updateMember(id, { show_on_site: !m.showOnSite });
    setMembers(prev => prev.map(x => x.id === id ? { ...x, showOnSite: !x.showOnSite } : x));
  };

  const removeMember = async (id: string) => {
    await api.deleteMember(id); setMembers(prev => prev.filter(m => m.id !== id));
  };

  // News
  const addNews = async (item: NewsItem) => {
    const created = await api.createNews({
      title: item.titleBn, title_bn: item.titleBn, content: item.contentBn,
      content_bn: item.contentBn, date: item.date, category: item.category, published: true,
    });
    setNews(prev => [mapNews(created), ...prev]);
  };

  const toggleNewsPublished = async (id: string) => {
    const item = news.find(n => n.id === id); if (!item) return;
    await api.updateNews(id, { published: !item.published });
    setNews(prev => prev.map(n => n.id === id ? { ...n, published: !n.published } : n));
  };

  const removeNews = async (id: string) => {
    await api.deleteNews(id); setNews(prev => prev.filter(n => n.id !== id));
  };

  // Gallery
  const addGallery = async (item: GalleryItem, imageFile?: File) => {
    const fd = new FormData();
    fd.append('title', item.titleBn); fd.append('title_bn', item.titleBn);
    fd.append('media_type', item.mediaType); fd.append('date', item.date);
    fd.append('published', 'true'); fd.append('order', '0');
    if (item.videoUrl) fd.append('video_url', item.videoUrl);
    if (imageFile) fd.append('image', imageFile);
    const created = await api.createGalleryItem(fd);
    setGallery(prev => [mapGallery(created), ...prev]);
  };

  const toggleGalleryPublished = async (id: string) => {
    const item = gallery.find(g => g.id === id); if (!item) return;
    await api.updateGalleryItem(id, { published: !item.published });
    setGallery(prev => prev.map(g => g.id === id ? { ...g, published: !g.published } : g));
  };

  const removeGallery = async (id: string) => {
    await api.deleteGalleryItem(id); setGallery(prev => prev.filter(g => g.id !== id));
  };

  const isAdminPage = page === 'admin-login' || page === 'admin-dashboard';

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && <Navbar currentPage={page} onNavigate={handleNavigate} isAdmin={isAdmin} onLogout={handleLogout} />}
      <main className="flex-1">
        {page === 'home' && <Home onNavigate={handleNavigate} news={news} />}
        {page === 'why-maseba' && <WhyMaSeba />}
        {page === 'about' && <About />}
        {page === 'board' && <Board members={boardMembers} regularMembers={members} />}
        {page === 'services' && <Services />}
        {page === 'office' && <Office />}
        {page === 'news' && <News news={news} />}
        {page === 'gallery' && <Gallery gallery={gallery.filter(g => g.published)} />}
        {page === 'admin-login' && <AdminLogin onLogin={handleLogin} />}
        {page === 'admin-dashboard' && isAdmin && (
          <AdminDashboard
            members={members} news={news} gallery={gallery}
            onAddMember={addMember} onToggleMemberVisibility={toggleMemberVisibility} onRemoveMember={removeMember}
            onAddNews={addNews} onToggleNewsPublished={toggleNewsPublished} onRemoveNews={removeNews}
            onAddGallery={addGallery} onToggleGalleryPublished={toggleGalleryPublished} onRemoveGallery={removeGallery}
          />
        )}
      </main>
      {!isAdminPage && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
