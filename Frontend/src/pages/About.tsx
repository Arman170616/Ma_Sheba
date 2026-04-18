import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">আমাদের পরিচয়</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">কোম্পানি সম্পর্কে</h1>
          <p className="text-blue-200 text-lg">মা সেবা সোসাইটির ইতিহাস, লক্ষ্য ও কার্যক্রম</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">আমাদের পরিচয়</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-blue-900">মা সেবা সোসাইটি</strong> বাংলাদেশের ফেনি জেলায় প্রতিষ্ঠিত একটি অলাভজনক মাতৃস্বাস্থ্যসেবা সংগঠন। প্রতিষ্ঠার পর থেকে আমরা গর্ভবতী মায়েদের এবং নবজাতকদের স্বাস্থ্য নিশ্চিত করতে নিরলস কাজ করে আসছি।
              </p>
              <p>
                আমাদের সংগঠনটি বেসরকারি উদ্যোগে পরিচালিত হলেও স্থানীয় সরকার ও স্বাস্থ্য মন্ত্রণালয়ের সাথে সমন্বয়ের মাধ্যমে কার্যক্রম পরিচালনা করে থাকে।
              </p>
              <p>
                আমাদের নিবেদিতপ্রাণ কর্মী দল ফেনি জেলার বিভিন্ন উপজেলায় মাঠপর্যায়ে সেবা প্রদান করে আসছে। প্রতিটি মায়ের সুস্বাস্থ্য নিশ্চিত করতে আমরা দিনরাত পরিশ্রম করি।
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">নিবন্ধন নম্বর</div>
                <div className="font-semibold text-blue-900">MA/SEBA/FENI/2013</div>
              </div>
              <div className="bg-teal-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">প্রতিষ্ঠাকাল</div>
                <div className="font-semibold text-teal-800">২০১৩ সাল</div>
              </div>
              <div className="bg-rose-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">সংগঠনের ধরন</div>
                <div className="font-semibold text-rose-700">অলাভজনক স্বেচ্ছাসেবী সংগঠন</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">কার্যক্ষেত্র</div>
                <div className="font-semibold text-gray-800">ফেনি জেলা ও আশপাশ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={28} className="text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">আমাদের লক্ষ্য</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              বাংলাদেশে মাতৃমৃত্যু ও শিশুমৃত্যু শূন্যে নামিয়ে আনা এবং প্রতিটি গর্ভবতী মায়ের জন্য নিরাপদ মাতৃত্ব নিশ্চিত করা।
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye size={28} className="text-teal-700" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">আমাদের দৃষ্টিভঙ্গি</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              এমন একটি সমাজ গড়া যেখানে প্রতিটি মা সুস্থ ও নিরাপদে সন্তান জন্ম দিতে পারবেন এবং প্রতিটি শিশু সুস্থভাবে জন্ম নিতে পারবে।
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={28} className="text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">আমাদের মিশন</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              দক্ষ জনবল তৈরি, সচেতনতা বৃদ্ধি এবং সরাসরি সেবা প্রদানের মাধ্যমে মাতৃস্বাস্থ্যের উন্নয়ন সাধন করা।
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">আমাদের মূল্যবোধ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🤝', title: 'সহমর্মিতা', desc: 'প্রতিটি মায়ের প্রতি সহানুভূতি ও সম্মান' },
              { icon: '⚡', title: 'দক্ষতা', desc: 'সেবায় সর্বোচ্চ দক্ষতা ও পেশাদারিত্ব' },
              { icon: '🔬', title: 'প্রমাণভিত্তিক সেবা', desc: 'বৈজ্ঞানিক ও আধুনিক পদ্ধতিতে সেবা' },
              { icon: '🌍', title: 'অন্তর্ভুক্তি', desc: 'সব শ্রেণির মায়েদের সেবায় প্রতিশ্রুতিবদ্ধ' },
              { icon: '🔒', title: 'স্বচ্ছতা', desc: 'কার্যক্রমে সম্পূর্ণ স্বচ্ছতা ও জবাবদিহিতা' },
              { icon: '🚀', title: 'উদ্ভাবন', desc: 'ক্রমাগত নতুন পদ্ধতিতে সেবার উন্নয়ন' },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <div className="font-semibold text-blue-900 text-sm mb-1">{v.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
