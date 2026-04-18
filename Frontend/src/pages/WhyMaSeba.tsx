import { CheckCircle } from 'lucide-react';

export default function WhyMaSeba() {
  const reasons = [
    {
      title: 'দক্ষ ও প্রশিক্ষিত দল',
      desc: 'আমাদের সকল স্বাস্থ্যকর্মী বিশেষ প্রশিক্ষণপ্রাপ্ত এবং মাতৃস্বাস্থ্য বিষয়ে অভিজ্ঞ। তারা নিরলস সেবা প্রদানে প্রতিশ্রুতিবদ্ধ।',
    },
    {
      title: 'গ্রামীণ মায়েদের কাছে পৌঁছানো',
      desc: 'শহরের বাইরে দূর-দূরান্তের গ্রামের মায়েদের কাছে সেবা পৌঁছে দিতে আমরা মাঠপর্যায়ে কাজ করি। কোনো মা যেন স্বাস্থ্যসেবা থেকে বঞ্চিত না হন।',
    },
    {
      title: 'সাশ্রয়ী ও বিনামূল্যে সেবা',
      desc: 'অসহায় ও দরিদ্র মায়েদের জন্য বিনামূল্যে এবং অন্যান্যদের জন্য সাশ্রয়ী মূল্যে স্বাস্থ্যসেবা প্রদান আমাদের মূলনীতি।',
    },
    {
      title: 'আধুনিক পদ্ধতিতে মাতৃসেবা',
      desc: 'আধুনিক চিকিৎসা বিজ্ঞানের সাথে তাল মিলিয়ে আমরা সেবা আপডেট করি এবং স্বাস্থ্যকর্মীদের নিয়মিত প্রশিক্ষণ দিই।',
    },
    {
      title: 'সামগ্রিক মাতৃস্বাস্থ্য সুরক্ষা',
      desc: 'শুধু প্রসব নয়, গর্ভধারণ থেকে শুরু করে প্রসব পরবর্তী সম্পূর্ণ সময়কাল পর্যন্ত আমরা মায়েদের স্বাস্থ্য নিশ্চিত করি।',
    },
    {
      title: 'সমাজের প্রতি দায়বদ্ধতা',
      desc: 'আমরা শুধু সেবা প্রদানকারী নই — আমরা সমাজ পরিবর্তনের অংশীদার। মাতৃমৃত্যু শূন্যে নামিয়ে আনাই আমাদের চূড়ান্ত লক্ষ্য।',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">আমাদের লক্ষ্য ও উদ্দেশ্য</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">কেন মা সেবা সোসাইটি?</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            মাতৃমৃত্যু ও শিশুমৃত্যু হ্রাস করতে এবং প্রতিটি মায়ের সুস্বাস্থ্য নিশ্চিত করতে আমাদের প্রতিষ্ঠা
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">আমাদের প্রতিষ্ঠার গল্প</h2>
          <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              বাংলাদেশে মাতৃমৃত্যুর হার আশঙ্কাজনকভাবে বেশি ছিল। বিশেষ করে গ্রামাঞ্চলে সঠিক স্বাস্থ্যসেবার অভাবে প্রতি বছর অগণিত মা প্রসবজনিত জটিলতায় মারা যাচ্ছিলেন। এই মর্মান্তিক বাস্তবতা থেকে অনুপ্রাণিত হয়ে একদল সমাজসেবী ও স্বাস্থ্যসচেতন মানুষ মিলে গড়ে তুলেছিলেন মা সেবা সোসাইটি।
            </p>
            <p>
              ফেনি জেলার প্রত্যন্ত অঞ্চলে যেখানে স্বাস্থ্যসেবা পৌঁছায় না, সেখানে আমরা আমাদের দক্ষ দল নিয়ে কাজ করছি। আমাদের লক্ষ্য একটাই — প্রতিটি মা যেন নিরাপদে সন্তান প্রসব করতে পারেন এবং তার সন্তান সুস্থভাবে পৃথিবীতে আসতে পারে।
            </p>
            <p>
              গত এক দশকেরও বেশি সময় ধরে আমরা হাজার হাজার মায়ের পাশে থেকে সেবা দিয়ে আসছি। আমাদের প্রশিক্ষিত স্বাস্থ্যকর্মীরা দিনরাত পরিশ্রম করে যাচ্ছেন। বিনামূল্যে স্বাস্থ্য পরীক্ষা, পুষ্টি পরামর্শ, নিরাপদ প্রসব সহায়তা — সব কিছুই আমাদের কর্মসূচির অংশ।
            </p>
            <p>
              আমরা বিশ্বাস করি সুস্থ মা মানেই সুস্থ শিশু, আর সুস্থ শিশুই আমাদের আগামীর ভবিষ্যৎ। তাই প্রতিটি মায়ের সুস্বাস্থ্য নিশ্চিত করাই আমাদের সর্বোচ্চ অগ্রাধিকার।
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">আমাদের বিশেষত্ব</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
              <div className="shrink-0 mt-1">
                <CheckCircle size={22} className="text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">আমাদের দৃষ্টিভঙ্গি</h3>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            "প্রতিটি মা নিরাপদ মাতৃত্বের অধিকারী। আমরা সেই স্বপ্ন পূরণে অঙ্গীকারবদ্ধ।"
          </p>
          <div className="mt-4 text-teal-300 font-medium">— মা সেবা সোসাইটি</div>
        </div>
      </div>
    </div>
  );
}
