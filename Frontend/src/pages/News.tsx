import { Calendar, Tag } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsProps {
  news: NewsItem[];
}

const categoryColors: Record<string, string> = {
  'স্বাস্থ্যসেবা': 'bg-blue-100 text-blue-700',
  'প্রশিক্ষণ': 'bg-teal-100 text-teal-700',
  'সহায়তা': 'bg-rose-100 text-rose-700',
  'সচেতনতা': 'bg-green-100 text-green-700',
  'প্রতিবেদন': 'bg-amber-100 text-amber-700',
};

export default function News({ news }: NewsProps) {
  const published = news.filter(n => n.published);
  const featured = published[0];
  const rest = published.slice(1);

  if (published.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">সংবাদ পোর্টাল</h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <p className="text-gray-400 text-lg">কোনো সংবাদ পাওয়া যায়নি।</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">সর্বশেষ আপডেট</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">সংবাদ পোর্টাল</h1>
          <p className="text-blue-200 text-lg">মা সেবা সোসাইটির সর্বশেষ কার্যক্রম ও সংবাদ</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {featured && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8 hover:shadow-md transition-shadow">
            <div className="h-2 bg-gradient-to-r from-blue-900 to-teal-600" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                  {featured.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Calendar size={12} />
                  {featured.date}
                </span>
                <span className="text-xs bg-blue-900 text-white px-2 py-0.5 rounded font-medium">প্রধান সংবাদ</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3 leading-tight">{featured.titleBn}</h2>
              <p className="text-gray-600 leading-relaxed">{featured.contentBn}</p>
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-900 to-teal-600" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${categoryColors[item.category] || 'bg-gray-100 text-gray-600'}`}>
                      <Tag size={10} />
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar size={11} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-base leading-tight mb-2">{item.titleBn}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.contentBn}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {published.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">এই মুহূর্তে কোনো সংবাদ নেই।</p>
          </div>
        )}
      </div>
    </div>
  );
}
