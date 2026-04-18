import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from 'lucide-react';

export default function Office() {
  const officeDetails = [
    {
      icon: MapPin,
      label: 'ঠিকানা',
      value: 'মা সেবা সোসাইটি অফিস\nফেনি, ৩৯০০\nবাংলাদেশ',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Phone,
      label: 'ফোন নম্বর',
      value: '+880 1832-698111',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      link: 'tel:+8801832698111',
    },
    {
      icon: Mail,
      label: 'ইমেইল',
      value: 'masebabd@gmail.com',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      link: 'mailto:masebabd@gmail.com',
    },
    {
      icon: Globe,
      label: 'ওয়েবসাইট',
      value: 'masebabd.com',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Clock,
      label: 'অফিস সময়',
      value: 'শনিবার - বৃহস্পতিবার\nসকাল ৯:০০ - বিকাল ৫:০০',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: MessageCircle,
      label: 'জরুরি হটলাইন',
      value: '+880 1832-698111\n(২৪ ঘণ্টা)',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
  ];

  const branches = [
    { name: 'প্রধান কার্যালয়', location: 'ফেনি সদর', status: 'সক্রিয়' },
    { name: 'শাখা কার্যালয় - ১', location: 'ছাগলনাইয়া, ফেনি', status: 'সক্রিয়' },
    { name: 'শাখা কার্যালয় - ২', location: 'সোনাগাজী, ফেনি', status: 'সক্রিয়' },
    { name: 'শাখা কার্যালয় - ৩', location: 'পরশুরাম, ফেনি', status: 'সক্রিয়' },
    { name: 'শাখা কার্যালয় - ৪', location: 'দাগনভূঁইয়া, ফেনি', status: 'শীঘ্রই আসছে' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">আমাদের ঠিকানা</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">অফিস বিবরণ</h1>
          <p className="text-blue-200 text-lg">মা সেবা সোসাইটির অফিস সম্পর্কিত তথ্য</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {officeDetails.map((detail, i) => {
            const Icon = detail.icon;
            const content = (
              <div className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow ${detail.link ? 'cursor-pointer' : ''}`}>
                <div className={`w-11 h-11 ${detail.bg} rounded-lg flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={detail.color} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">{detail.label}</div>
                  <div className="text-gray-800 font-medium text-sm whitespace-pre-line leading-relaxed">{detail.value}</div>
                </div>
              </div>
            );

            return detail.link ? (
              <a key={i} href={detail.link} className="block">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-6">আমাদের শাখা কার্যালয়</h2>
          <div className="space-y-3">
            {branches.map((branch, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-medium text-blue-900 text-sm">{branch.name}</div>
                    <div className="text-gray-500 text-xs flex items-center gap-1">
                      <MapPin size={11} />
                      {branch.location}
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  branch.status === 'সক্রিয়'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {branch.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-blue-900">মানচিত্রে অবস্থান</h2>
            <p className="text-gray-500 text-sm mt-1">ফেনি, বাংলাদেশ</p>
          </div>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-blue-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm font-medium">ফেনি, ৩৯০০, বাংলাদেশ</p>
              <p className="text-gray-400 text-xs mt-1">মানচিত্র লোড হচ্ছে...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
