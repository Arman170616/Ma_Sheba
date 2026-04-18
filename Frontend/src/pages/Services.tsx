export default function Services() {
  const services = [
    {
      icon: '🤰',
      title: 'প্রসব পূর্ব সেবা (Antenatal Care)',
      desc: 'গর্ভাবস্থায় নিয়মিত স্বাস্থ্য পরীক্ষা, শিশুর বৃদ্ধি পর্যবেক্ষণ, রক্তচাপ ও ডায়াবেটিস পরীক্ষা, প্রয়োজনীয় ভ্যাকসিন প্রদান এবং পুষ্টি পরামর্শ।',
      features: ['নিয়মিত স্বাস্থ্য পরীক্ষা', 'আলট্রাসনোগ্রাফি রেফারেল', 'আয়রন ও ফলিক এসিড সরবরাহ', 'ঝুঁকি নির্ণয় ও ব্যবস্থাপনা'],
      color: 'from-blue-900 to-blue-700',
      badge: 'bg-blue-100 text-blue-800',
    },
    {
      icon: '👶',
      title: 'নিরাপদ প্রসব সহায়তা',
      desc: 'দক্ষ ও প্রশিক্ষিত ধাত্রী দ্বারা নিরাপদ প্রসব ব্যবস্থাপনা, জটিল পরিস্থিতিতে দ্রুত রেফারেল এবং প্রসবকালীন জরুরি সেবা।',
      features: ['প্রশিক্ষিত ধাত্রী সেবা', 'প্রসবকালীন পর্যবেক্ষণ', 'জরুরি রেফারেল সুবিধা', 'সংক্রমণ প্রতিরোধ ব্যবস্থা'],
      color: 'from-teal-700 to-teal-600',
      badge: 'bg-teal-100 text-teal-800',
    },
    {
      icon: '🍼',
      title: 'প্রসব পরবর্তী সেবা (Postnatal Care)',
      desc: 'প্রসবের পর মা ও শিশুর যত্ন, স্তন্যদান সহায়তা, জরায়ু সংকোচন পর্যবেক্ষণ, প্রসব পরবর্তী বিষণ্নতা সনাক্ত ও সহায়তা।',
      features: ['নবজাতকের যত্ন পরামর্শ', 'বুকের দুধ পানের কৌশল', 'প্রসব পরবর্তী স্বাস্থ্য পরীক্ষা', 'মানসিক সহায়তা'],
      color: 'from-rose-600 to-rose-500',
      badge: 'bg-rose-100 text-rose-800',
    },
    {
      icon: '💊',
      title: 'পুষ্টি পরামর্শ ও সহায়তা',
      desc: 'গর্ভবতী ও স্তন্যদানকারী মায়েদের জন্য বিশেষ পুষ্টি পরিকল্পনা, বিনামূল্যে পুষ্টি উপাদান বিতরণ এবং পুষ্টি সচেতনতা কার্যক্রম।',
      features: ['পুষ্টি মূল্যায়ন', 'ডায়েট পরামর্শ', 'পুষ্টি সম্পূরক বিতরণ', 'পরিবার সচেতনতা'],
      color: 'from-amber-600 to-amber-500',
      badge: 'bg-amber-100 text-amber-800',
    },
    {
      icon: '📚',
      title: 'স্বাস্থ্য শিক্ষা ও প্রশিক্ষণ',
      desc: 'গ্রামীণ নারীদের মাতৃস্বাস্থ্য বিষয়ে সচেতন করতে নিয়মিত সেমিনার, উঠান বৈঠক, প্রশিক্ষণ কর্মশালা এবং স্বাস্থ্য ক্যাম্প আয়োজন।',
      features: ['উঠান বৈঠক কার্যক্রম', 'সচেতনতামূলক সেমিনার', 'ধাত্রী প্রশিক্ষণ', 'স্কুল স্বাস্থ্য শিক্ষা'],
      color: 'from-green-700 to-green-600',
      badge: 'bg-green-100 text-green-800',
    },
    {
      icon: '🏥',
      title: 'রেফারেল ও পরিবহন সেবা',
      desc: 'জটিল প্রসব বা স্বাস্থ্য সমস্যায় দ্রুত হাসপাতালে রেফারেল ও পরিবহন ব্যবস্থা করা হয়। জরুরি পরিস্থিতিতে ২৪ ঘণ্টা সহায়তা।',
      features: ['জরুরি রেফারেল ব্যবস্থা', 'অ্যাম্বুলেন্স সংযোগ', 'হাসপাতাল যোগাযোগ', '২৪/৭ হটলাইন সেবা'],
      color: 'from-gray-800 to-gray-700',
      badge: 'bg-gray-100 text-gray-800',
    },
    {
      icon: '👩‍⚕️',
      title: 'পরিবার পরিকল্পনা পরামর্শ',
      desc: 'দম্পতিদের সঠিক পরিবার পরিকল্পনা পদ্ধতি সম্পর্কে পরামর্শ প্রদান, প্রজনন স্বাস্থ্য শিক্ষা এবং জন্মনিয়ন্ত্রণ সামগ্রী বিতরণ।',
      features: ['পরিবার পরিকল্পনা পরামর্শ', 'গর্ভনিরোধক সরবরাহ', 'দম্পতি কাউন্সেলিং', 'প্রজনন স্বাস্থ্য শিক্ষা'],
      color: 'from-violet-700 to-violet-600',
      badge: 'bg-violet-100 text-violet-800',
    },
    {
      icon: '🆘',
      title: 'জরুরি মাতৃস্বাস্থ্য সেবা',
      desc: 'প্রসবকালীন রক্তক্ষরণ, একলাম্পসিয়া বা অন্যান্য জটিলতায় জরুরি ভিত্তিতে চিকিৎসা সহায়তা ও দ্রুত রেফারেল নিশ্চিত করা।',
      features: ['প্রসবকালীন জরুরি সেবা', 'রক্তক্ষরণ ব্যবস্থাপনা', 'দ্রুত চিকিৎসা সহায়তা', 'আইসিইউ রেফারেল'],
      color: 'from-red-700 to-red-600',
      badge: 'bg-red-100 text-red-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">আমাদের কার্যক্রম</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের সেবাসমূহ</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">মা সেবা সোসাইটি যে সেবাগুলো নিয়ে কাজ করে</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`bg-gradient-to-r ${svc.color} p-5 text-white flex items-start gap-4`}>
                <span className="text-4xl">{svc.icon}</span>
                <h3 className="text-lg font-bold leading-tight">{svc.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.features.map((f, fi) => (
                    <span key={fi} className={`text-xs px-2.5 py-1 rounded-full font-medium ${svc.badge}`}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-blue-900 to-teal-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">সেবা নিতে যোগাযোগ করুন</h3>
          <p className="text-blue-200 mb-6">আমাদের যেকোনো সেবা সম্পর্কে জানতে বা সেবা নিতে আজই যোগাযোগ করুন</p>
          <a
            href="tel:+8801832698111"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            📞 +880 1832-698111
          </a>
        </div>
      </div>
    </div>
  );
}
