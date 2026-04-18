import { Heart, Users, Award, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Page, NewsItem } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
  news: NewsItem[];
}

const stats = [
  { value: '৫০০০+', label: 'মা উপকৃত হয়েছেন' },
  { value: '১০+', label: 'বছরের অভিজ্ঞতা' },
  { value: '৫০+', label: 'দক্ষ স্বাস্থ্যকর্মী' },
  { value: '১৫+', label: 'উপজেলায় কার্যক্রম' },
];

const quickServices = [
  { icon: '🤰', title: 'প্রসব পূর্ব সেবা', desc: 'গর্ভকালীন নিয়মিত স্বাস্থ্য পরীক্ষা ও পরামর্শ' },
  { icon: '👶', title: 'নিরাপদ প্রসব সহায়তা', desc: 'দক্ষ ধাত্রী দ্বারা নিরাপদ প্রসব ব্যবস্থাপনা' },
  { icon: '🍼', title: 'মাতৃদুগ্ধ পান সহায়তা', desc: 'সঠিক বুকের দুধ পান করানোর পদ্ধতি ও পরামর্শ' },
  { icon: '💊', title: 'পুষ্টি পরামর্শ', desc: 'গর্ভবতী ও প্রসূতি মায়ের জন্য বিশেষ পুষ্টি গাইড' },
  { icon: '🏥', title: 'রেফারেল সেবা', desc: 'জটিল মামলায় দ্রুত হাসপাতালে রেফারেল সুবিধা' },
  { icon: '📚', title: 'স্বাস্থ্য শিক্ষা', desc: 'মাতৃস্বাস্থ্য বিষয়ে সচেতনতামূলক প্রশিক্ষণ' },
];

export default function Home({ onNavigate, news }: HomeProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const publishedNews = news.filter(n => n.published).slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-700/30 border border-teal-500/30 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-teal-300" />
            <span className="text-teal-200 text-sm">বাংলাদেশের বিশ্বস্ত মাতৃসেবা প্রতিষ্ঠান</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            মাতৃ কালিন মায়েদের
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-300 leading-tight mb-6">
            আস্থার প্রতিষ্ঠান
          </h2>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            সুস্থ শিশু আগামীর ভবিষ্যৎ। তাই আগামীর ভবিষ্যৎকে সুস্থ রাখার লক্ষ্যে নিরলসভাবে কাজ করে যাচ্ছে মা সেবা সোসাইটি।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav('services')}
              className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-teal-500/25"
            >
              আমাদের সেবাসমূহ
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleNav('about')}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-200 border border-white/20"
            >
              আমাদের সম্পর্কে জানুন
            </button>
          </div>
        </div>

        <div className="relative bg-blue-950/60 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-1">{s.value}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-700 text-sm font-semibold uppercase tracking-wider">আমাদের কার্যক্রম</span>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">আমরা যে সেবাগুলো প্রদান করি</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">গর্ভকালীন থেকে প্রসব পরবর্তী সময় পর্যন্ত মায়েদের পাশে থাকে মা সেবা</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickServices.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-blue-900 font-semibold text-lg mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium transition-colors"
            >
              সব সেবা দেখুন <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-700 text-sm font-semibold uppercase tracking-wider">আমাদের লক্ষ্য</span>
              <h2 className="text-3xl font-bold text-blue-900 mt-2 mb-4">কেন মা সেবা সোসাইটি?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                বাংলাদেশে মাতৃমৃত্যু ও শিশুমৃত্যু হ্রাস করতে এবং প্রতিটি মায়ের সুস্বাস্থ্য নিশ্চিত করতে মা সেবা সোসাইটি অক্লান্তভাবে কাজ করে যাচ্ছে।
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                আমরা বিশ্বাস করি প্রতিটি মা বিশেষ যত্ন ও সম্মানের দাবিদার। তাই আমাদের সকল সেবা মায়েদের কথা মাথায় রেখে পরিকল্পনা করা হয়।
              </p>
              <div className="space-y-3">
                {['দক্ষ ও প্রশিক্ষিত স্বাস্থ্যকর্মী দল', 'বিনামূল্যে স্বাস্থ্য পরামর্শ সেবা', 'গ্রামীণ মায়েদের দোরগোড়ায় সেবা', '২৪/৭ জরুরি সহায়তা'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleNav('why-maseba')}
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                বিস্তারিত পড়ুন <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white">
                <Heart size={32} className="text-teal-300 mb-3" />
                <div className="text-2xl font-bold mb-1">১০+</div>
                <div className="text-blue-200 text-sm">বছর ধরে মায়েদের সেবায়</div>
              </div>
              <div className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl p-6 text-white mt-6">
                <Users size={32} className="text-teal-200 mb-3" />
                <div className="text-2xl font-bold mb-1">৫০+</div>
                <div className="text-teal-100 text-sm">দক্ষ সেবাকর্মী</div>
              </div>
              <div className="bg-gradient-to-br from-rose-600 to-rose-500 rounded-2xl p-6 text-white -mt-2">
                <Award size={32} className="text-rose-200 mb-3" />
                <div className="text-2xl font-bold mb-1">সেরা</div>
                <div className="text-rose-100 text-sm">মাতৃসেবা প্রতিষ্ঠান</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 text-white mt-4">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-2xl font-bold mb-1">৫০০০+</div>
                <div className="text-gray-300 text-sm">সুখী মা পরিবার</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {publishedNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-teal-700 text-sm font-semibold uppercase tracking-wider">সংবাদ ও আপডেট</span>
                <h2 className="text-3xl font-bold text-blue-900 mt-1">সর্বশেষ সংবাদ</h2>
              </div>
              <button
                onClick={() => handleNav('news')}
                className="hidden md:inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium"
              >
                সব সংবাদ <ChevronRight size={18} />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {publishedNews.map(item => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-2 bg-gradient-to-r from-blue-900 to-teal-600" />
                  <div className="p-5">
                    <span className="inline-block bg-teal-50 text-teal-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-blue-900 font-semibold text-base leading-tight mb-2">{item.titleBn}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.contentBn}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{item.date}</span>
                      <button
                        onClick={() => handleNav('news')}
                        className="text-teal-700 hover:text-teal-800 text-sm font-medium flex items-center gap-1"
                      >
                        পড়ুন <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="text-blue-200 mb-8 text-lg">যেকোনো সহায়তার জন্য আমরা সর্বদা প্রস্তুত</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+8801832698111"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 +880 1832-698111
            </a>
            <button
              onClick={() => handleNav('office')}
              className="px-8 py-3 bg-white/20 border border-white/30 text-white rounded-lg font-medium hover:bg-white/30 transition-colors"
            >
              অফিস ঠিকানা দেখুন
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
