import { useState } from 'react';
import { Image, Video, X, Play } from 'lucide-react';
import { GalleryItem } from '../types';
import { mediaUrl } from '../api';

interface GalleryProps {
  gallery: GalleryItem[];
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export default function Gallery({ gallery }: GalleryProps) {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = gallery.filter(item => filter === 'all' || item.mediaType === filter);
  const images = gallery.filter(g => g.mediaType === 'image');
  const videos = gallery.filter(g => g.mediaType === 'video');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">আমাদের কার্যক্রম</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">গ্যালারি</h1>
          <p className="text-blue-200 text-lg">মা সেবা সোসাইটির কার্যক্রমের ছবি ও ভিডিও সংকলন</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Stats + Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><Image size={16} className="text-blue-500" /> {images.length}টি ছবি</span>
            <span className="flex items-center gap-1.5"><Video size={16} className="text-red-500" /> {videos.length}টি ভিডিও</span>
          </div>
          <div className="flex gap-2">
            {([
              { key: 'all', label: 'সব' },
              { key: 'image', label: 'ছবি' },
              { key: 'video', label: 'ভিডিও' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === key ? 'bg-blue-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Image size={48} className="mx-auto mb-3 opacity-30" />
            <p>কোনো আইটেম পাওয়া যায়নি।</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(item => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="relative h-48 bg-gray-100">
                  {item.mediaType === 'image' && item.image ? (
                    <img src={mediaUrl(item.image)} alt={item.titleBn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : item.mediaType === 'video' && item.videoUrl ? (
                    <>
                      {getYouTubeThumbnail(item.videoUrl) ? (
                        <img src={getYouTubeThumbnail(item.videoUrl)!} alt={item.titleBn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={20} className="text-white ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image size={32} className="text-gray-300" />
                    </div>
                  )}
                  <span className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium ${item.mediaType === 'video' ? 'bg-red-500 text-white' : 'bg-blue-500/80 text-white'}`}>
                    {item.mediaType === 'video' ? 'ভিডিও' : 'ছবি'}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-blue-900 text-sm line-clamp-1">{item.titleBn}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/30 rounded-full p-2" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            {lightbox.mediaType === 'image' && lightbox.image ? (
              <img src={mediaUrl(lightbox.image)} alt={lightbox.titleBn} className="w-full max-h-[80vh] object-contain rounded-xl" />
            ) : lightbox.mediaType === 'video' && lightbox.videoUrl ? (
              <div className="aspect-video rounded-xl overflow-hidden">
                {getYouTubeId(lightbox.videoUrl) ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(lightbox.videoUrl)}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <video src={lightbox.videoUrl} controls className="w-full h-full" autoPlay />
                )}
              </div>
            ) : null}
            <div className="mt-3 text-center">
              <h3 className="text-white font-semibold text-lg">{lightbox.titleBn}</h3>
              <p className="text-white/60 text-sm mt-1">{lightbox.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
