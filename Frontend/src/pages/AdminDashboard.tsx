import { useState, useRef } from 'react';
import { Users, Newspaper, Plus, Trash2, Eye, EyeOff, X, Check, Image, Video, ImageIcon } from 'lucide-react';
import { Member, NewsItem, GalleryItem } from '../types';
import { mediaUrl } from '../api';

interface AdminDashboardProps {
  members: Member[];
  news: NewsItem[];
  gallery: GalleryItem[];
  onAddMember: (member: Member, photoFile?: File) => void;
  onToggleMemberVisibility: (id: string) => void;
  onRemoveMember: (id: string) => void;
  onAddNews: (item: NewsItem) => void;
  onToggleNewsPublished: (id: string) => void;
  onRemoveNews: (id: string) => void;
  onAddGallery: (item: GalleryItem, imageFile?: File) => void;
  onToggleGalleryPublished: (id: string) => void;
  onRemoveGallery: (id: string) => void;
}

type Tab = 'members' | 'news' | 'gallery';

export default function AdminDashboard({
  members, news, gallery,
  onAddMember, onToggleMemberVisibility, onRemoveMember,
  onAddNews, onToggleNewsPublished, onRemoveNews,
  onAddGallery, onToggleGalleryPublished, onRemoveGallery,
}: AdminDashboardProps) {
  const [tab, setTab] = useState<Tab>('members');
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);

  const [memberForm, setMemberForm] = useState({ nameBn: '', designationBn: '', phone: '', joinDate: '' });
  const [memberPhoto, setMemberPhoto] = useState<File | null>(null);
  const [memberPhotoPreview, setMemberPhotoPreview] = useState<string | null>(null);
  const memberPhotoRef = useRef<HTMLInputElement>(null);

  const [newsForm, setNewsForm] = useState({ titleBn: '', contentBn: '', category: '', date: '' });

  const [galleryForm, setGalleryForm] = useState({ titleBn: '', mediaType: 'image' as 'image' | 'video', videoUrl: '', date: '' });
  const [galleryImage, setGalleryImage] = useState<File | null>(null);
  const [galleryImagePreview, setGalleryImagePreview] = useState<string | null>(null);
  const galleryImageRef = useRef<HTMLInputElement>(null);

  const handleMemberPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMemberPhoto(file);
      setMemberPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setGalleryImage(file);
      setGalleryImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    const newMember: Member = {
      id: Date.now().toString(),
      name: memberForm.nameBn,
      nameBn: memberForm.nameBn,
      designation: memberForm.designationBn,
      designationBn: memberForm.designationBn,
      phone: memberForm.phone,
      joinDate: memberForm.joinDate || new Date().toISOString().split('T')[0],
      showOnSite: true,
    };
    onAddMember(newMember, memberPhoto || undefined);
    setMemberForm({ nameBn: '', designationBn: '', phone: '', joinDate: '' });
    setMemberPhoto(null);
    setMemberPhotoPreview(null);
    setShowMemberForm(false);
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: NewsItem = {
      id: Date.now().toString(),
      title: newsForm.titleBn,
      titleBn: newsForm.titleBn,
      content: newsForm.contentBn,
      contentBn: newsForm.contentBn,
      category: newsForm.category,
      date: newsForm.date || new Date().toISOString().split('T')[0],
      published: true,
    };
    onAddNews(newItem);
    setNewsForm({ titleBn: '', contentBn: '', category: '', date: '' });
    setShowNewsForm(false);
  };

  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      title: galleryForm.titleBn,
      titleBn: galleryForm.titleBn,
      mediaType: galleryForm.mediaType,
      videoUrl: galleryForm.videoUrl || undefined,
      date: galleryForm.date || new Date().toISOString().split('T')[0],
      published: true,
      order: 0,
    };
    onAddGallery(newItem, galleryImage || undefined);
    setGalleryForm({ titleBn: '', mediaType: 'image', videoUrl: '', date: '' });
    setGalleryImage(null);
    setGalleryImagePreview(null);
    setShowGalleryForm(false);
  };

  const stats = [
    { label: 'মোট সদস্য', value: members.length, icon: Users, color: 'bg-blue-100 text-blue-900' },
    { label: 'সাইটে দৃশ্যমান', value: members.filter(m => m.showOnSite).length, icon: Eye, color: 'bg-teal-100 text-teal-900' },
    { label: 'মোট সংবাদ', value: news.length, icon: Newspaper, color: 'bg-rose-100 text-rose-900' },
    { label: 'গ্যালারি আইটেম', value: gallery.length, icon: ImageIcon, color: 'bg-purple-100 text-purple-900' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-1">অ্যাডমিন ড্যাশবোর্ড</h1>
          <p className="text-blue-200">মা সেবা সোসাইটি পরিচালনা প্যানেল</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className={`w-10 h-10 ${s.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-800">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {([
            { key: 'members', label: 'সদস্য ব্যবস্থাপনা', Icon: Users },
            { key: 'news', label: 'সংবাদ ব্যবস্থাপনা', Icon: Newspaper },
            { key: 'gallery', label: 'গ্যালারি ব্যবস্থাপনা', Icon: ImageIcon },
          ] as const).map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                tab === key ? 'bg-blue-900 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Members Tab */}
        {tab === 'members' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-blue-900">সদস্য তালিকা</h2>
              <button onClick={() => setShowMemberForm(!showMemberForm)} className="flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors">
                <Plus size={16} /> নতুন সদস্য যোগ করুন
              </button>
            </div>

            {showMemberForm && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-blue-900">নতুন সদস্য যোগ করুন</h3>
                  <button onClick={() => setShowMemberForm(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
                </div>
                <form onSubmit={handleAddMember} className="space-y-4">
                  {/* Photo upload */}
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => memberPhotoRef.current?.click()}
                      className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors overflow-hidden shrink-0"
                    >
                      {memberPhotoPreview ? (
                        <img src={memberPhotoPreview} className="w-full h-full object-cover" alt="preview" />
                      ) : (
                        <div className="text-center">
                          <Image size={20} className="text-gray-400 mx-auto" />
                          <span className="text-xs text-gray-400 mt-1 block">ছবি</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700 mb-1">প্রোফাইল ছবি (ঐচ্ছিক)</p>
                      <button type="button" onClick={() => memberPhotoRef.current?.click()} className="text-xs text-blue-600 underline">
                        ছবি আপলোড করুন
                      </button>
                      <input ref={memberPhotoRef} type="file" accept="image/*" onChange={handleMemberPhotoChange} className="hidden" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">নাম (বাংলা)</label>
                      <input type="text" value={memberForm.nameBn} onChange={e => setMemberForm({ ...memberForm, nameBn: e.target.value })} placeholder="সদস্যের নাম" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">পদবি</label>
                      <input type="text" value={memberForm.designationBn} onChange={e => setMemberForm({ ...memberForm, designationBn: e.target.value })} placeholder="যেমন: সদস্য, স্বেচ্ছাসেবক" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর</label>
                      <input type="tel" value={memberForm.phone} onChange={e => setMemberForm({ ...memberForm, phone: e.target.value })} placeholder="01XXXXXXXXX" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">যোগদানের তারিখ</label>
                      <input type="date" value={memberForm.joinDate} onChange={e => setMemberForm({ ...memberForm, joinDate: e.target.value })} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end pt-2">
                    <button type="button" onClick={() => setShowMemberForm(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">বাতিল</button>
                    <button type="submit" className="px-6 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">যোগ করুন</button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">ছবি</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">নাম</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">পদবি</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">ফোন</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">যোগদান</th>
                      <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">সাইটে দেখান</th>
                      <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">মুছুন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {members.map(m => (
                      <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3">
                          <div className="w-9 h-9 rounded-full bg-blue-50 overflow-hidden flex items-center justify-center">
                            {m.photo ? <img src={mediaUrl(m.photo)} alt={m.nameBn} className="w-full h-full object-cover" /> : <Users size={16} className="text-blue-300" />}
                          </div>
                        </td>
                        <td className="px-5 py-4 font-medium text-blue-900 text-sm">{m.nameBn}</td>
                        <td className="px-5 py-4 text-gray-600 text-sm">{m.designationBn}</td>
                        <td className="px-5 py-4 text-gray-500 text-sm">{m.phone}</td>
                        <td className="px-5 py-4 text-gray-500 text-sm">{m.joinDate}</td>
                        <td className="px-5 py-4 text-center">
                          <button onClick={() => onToggleMemberVisibility(m.id)} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${m.showOnSite ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                            {m.showOnSite ? <Eye size={12} /> : <EyeOff size={12} />}
                            {m.showOnSite ? 'দৃশ্যমান' : 'লুকানো'}
                          </button>
                        </td>
                        <td className="px-5 py-4 text-center">
                          <button onClick={() => onRemoveMember(m.id)} className="text-red-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-all"><Trash2 size={15} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {members.length === 0 && <div className="text-center py-10 text-gray-400">কোনো সদস্য যোগ করা হয়নি।</div>}
              </div>
            </div>
          </div>
        )}

        {/* News Tab */}
        {tab === 'news' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-blue-900">সংবাদ তালিকা</h2>
              <button onClick={() => setShowNewsForm(!showNewsForm)} className="flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors">
                <Plus size={16} /> নতুন সংবাদ যোগ করুন
              </button>
            </div>

            {showNewsForm && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-blue-900">নতুন সংবাদ যোগ করুন</h3>
                  <button onClick={() => setShowNewsForm(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
                </div>
                <form onSubmit={handleAddNews} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">সংবাদ শিরোনাম (বাংলা)</label>
                    <input type="text" value={newsForm.titleBn} onChange={e => setNewsForm({ ...newsForm, titleBn: e.target.value })} placeholder="সংবাদের শিরোনাম লিখুন" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">বিভাগ</label>
                      <select value={newsForm.category} onChange={e => setNewsForm({ ...newsForm, category: e.target.value })} required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">বিভাগ নির্বাচন করুন</option>
                        {['স্বাস্থ্যসেবা','প্রশিক্ষণ','সহায়তা','সচেতনতা','প্রতিবেদন','অনুষ্ঠান'].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">তারিখ</label>
                      <input type="date" value={newsForm.date} onChange={e => setNewsForm({ ...newsForm, date: e.target.value })} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">বিস্তারিত বিবরণ</label>
                    <textarea value={newsForm.contentBn} onChange={e => setNewsForm({ ...newsForm, contentBn: e.target.value })} placeholder="সংবাদের বিস্তারিত বিবরণ লিখুন..." required rows={4} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                  </div>
                  <div className="flex gap-3 justify-end pt-1">
                    <button type="button" onClick={() => setShowNewsForm(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">বাতিল</button>
                    <button type="submit" className="px-6 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">প্রকাশ করুন</button>
                  </div>
                </form>
              </div>
            )}

            <div className="space-y-3">
              {news.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-medium">{item.category}</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-blue-900 text-sm mb-1 line-clamp-1">{item.titleBn}</h3>
                    <p className="text-gray-500 text-xs line-clamp-1">{item.contentBn}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button onClick={() => onToggleNewsPublished(item.id)} className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${item.published ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                      {item.published ? <Eye size={12} /> : <EyeOff size={12} />}
                      {item.published ? 'প্রকাশিত' : 'অপ্রকাশিত'}
                    </button>
                    <button onClick={() => onRemoveNews(item.id)} className="text-red-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-all"><Trash2 size={15} /></button>
                  </div>
                </div>
              ))}
              {news.length === 0 && <div className="bg-white rounded-xl p-10 text-center text-gray-400">কোনো সংবাদ যোগ করা হয়নি।</div>}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {tab === 'gallery' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-blue-900">গ্যালারি তালিকা</h2>
              <button onClick={() => setShowGalleryForm(!showGalleryForm)} className="flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors">
                <Plus size={16} /> নতুন আইটেম যোগ করুন
              </button>
            </div>

            {showGalleryForm && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-blue-900">নতুন গ্যালারি আইটেম যোগ করুন</h3>
                  <button onClick={() => setShowGalleryForm(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
                </div>
                <form onSubmit={handleAddGallery} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">শিরোনাম (বাংলা)</label>
                      <input type="text" value={galleryForm.titleBn} onChange={e => setGalleryForm({ ...galleryForm, titleBn: e.target.value })} placeholder="শিরোনাম লিখুন" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">মিডিয়া ধরন</label>
                      <select value={galleryForm.mediaType} onChange={e => setGalleryForm({ ...galleryForm, mediaType: e.target.value as 'image' | 'video' })} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="image">ছবি (Image)</option>
                        <option value="video">ভিডিও (Video)</option>
                      </select>
                    </div>
                  </div>

                  {galleryForm.mediaType === 'image' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ছবি আপলোড করুন</label>
                      <div
                        onClick={() => galleryImageRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"
                      >
                        {galleryImagePreview ? (
                          <img src={galleryImagePreview} alt="preview" className="max-h-40 mx-auto rounded-lg object-cover" />
                        ) : (
                          <div>
                            <Image size={32} className="text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-gray-400">ক্লিক করে ছবি নির্বাচন করুন</p>
                          </div>
                        )}
                      </div>
                      <input ref={galleryImageRef} type="file" accept="image/*" onChange={handleGalleryImageChange} className="hidden" />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ভিডিও লিংক (YouTube)</label>
                      <div className="relative">
                        <Video size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="url" value={galleryForm.videoUrl} onChange={e => setGalleryForm({ ...galleryForm, videoUrl: e.target.value })} placeholder="https://youtube.com/watch?v=..." required={galleryForm.mediaType === 'video'} className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">তারিখ</label>
                    <input type="date" value={galleryForm.date} onChange={e => setGalleryForm({ ...galleryForm, date: e.target.value })} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div className="flex gap-3 justify-end pt-1">
                    <button type="button" onClick={() => setShowGalleryForm(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">বাতিল</button>
                    <button type="submit" className="px-6 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800">যোগ করুন</button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-44 bg-gray-100">
                    {item.mediaType === 'image' && item.image ? (
                      <img src={mediaUrl(item.image)} alt={item.titleBn} className="w-full h-full object-cover" />
                    ) : item.mediaType === 'video' ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                        <Video size={40} className="text-white/60" />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image size={32} className="text-gray-300" />
                      </div>
                    )}
                    <span className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full font-medium ${item.mediaType === 'video' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}>
                      {item.mediaType === 'video' ? 'ভিডিও' : 'ছবি'}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-blue-900 text-sm mb-1 line-clamp-1">{item.titleBn}</h3>
                    <p className="text-gray-400 text-xs mb-3">{item.date}</p>
                    <div className="flex items-center justify-between">
                      <button onClick={() => onToggleGalleryPublished(item.id)} className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${item.published ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                        {item.published ? <><Check size={12} /> প্রকাশিত</> : <><EyeOff size={12} /> লুকানো</>}
                      </button>
                      <button onClick={() => onRemoveGallery(item.id)} className="text-red-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-all"><Trash2 size={15} /></button>
                    </div>
                  </div>
                </div>
              ))}
              {gallery.length === 0 && <div className="col-span-3 bg-white rounded-xl p-10 text-center text-gray-400">কোনো গ্যালারি আইটেম যোগ করা হয়নি।</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
