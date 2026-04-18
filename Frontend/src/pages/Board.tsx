import { User } from 'lucide-react';
import { BoardMember, Member } from '../types';
import { mediaUrl } from '../api';

interface BoardProps {
  members: BoardMember[];
  regularMembers: Member[];
}

const roleColors: Record<string, string> = {
  'সভাপতি': 'bg-blue-900 text-white',
  'সাধারণ সম্পাদক': 'bg-teal-700 text-white',
  'সহ-সভাপতি': 'bg-blue-700 text-white',
  'কোষাধ্যক্ষ': 'bg-teal-600 text-white',
};

function getColor(designation: string): string {
  return roleColors[designation] || 'bg-gray-200 text-gray-700';
}

export default function Board({ members, regularMembers }: BoardProps) {
  const sorted = [...members].sort((a, b) => a.order - b.order);
  const top = sorted.slice(0, 2);
  const rest = sorted.slice(2);
  const visible = regularMembers.filter(m => m.showOnSite);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-teal-700/40 border border-teal-400/30 text-teal-200 text-sm px-4 py-1.5 rounded-full mb-4">আমাদের নেতৃত্ব</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">পরিচালনা পরিষদ</h1>
          <p className="text-blue-200 text-lg">মা সেবা সোসাইটির দক্ষ ও অভিজ্ঞ পরিচালনা পরিষদ</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top 2 leadership */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          {top.map(member => (
            <div key={member.id} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center flex-1 max-w-xs mx-auto sm:mx-0 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm overflow-hidden">
                {member.photo ? (
                  <img src={mediaUrl(member.photo)} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={40} className="text-blue-400" />
                )}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${getColor(member.designation)}`}>
                {member.designation}
              </span>
            </div>
          ))}
        </div>

        {/* Rest of board */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map(member => (
            <div key={member.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-gray-100 overflow-hidden">
                {member.photo ? (
                  <img src={mediaUrl(member.photo)} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={28} className="text-blue-300" />
                )}
              </div>
              <h3 className="font-semibold text-blue-900 text-sm mb-1.5">{member.name}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getColor(member.designation)}`}>
                {member.designation}
              </span>
            </div>
          ))}
        </div>

        {/* Regular members section */}
        {visible.length > 0 && (
          <div className="mt-14">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">সাধারণ সদস্য তালিকা</h2>
              <p className="text-gray-500 text-sm">মা সেবা সোসাইটির নিবেদিত সদস্যবৃন্দ</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visible.map(m => (
                <div key={m.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-gray-100 overflow-hidden">
                    {m.photo ? (
                      <img src={mediaUrl(m.photo)} alt={m.nameBn} className="w-full h-full object-cover" />
                    ) : (
                      <User size={28} className="text-teal-300" />
                    )}
                  </div>
                  <h3 className="font-semibold text-blue-900 text-sm mb-1">{m.nameBn}</h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                    {m.designationBn}
                  </span>
                  <p className="text-gray-400 text-xs mt-2">{m.phone}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Duties section */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-blue-900 mb-6 text-center">পরিষদের দায়িত্ব ও কর্তব্য</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '📋', title: 'নীতি নির্ধারণ', desc: 'সংগঠনের নীতি ও কর্মপরিকল্পনা প্রণয়ন করেন' },
              { icon: '💰', title: 'আর্থিক ব্যবস্থাপনা', desc: 'সংগঠনের তহবিল সুষ্ঠুভাবে পরিচালনা করেন' },
              { icon: '👥', title: 'সদস্য ব্যবস্থাপনা', desc: 'নতুন সদস্য অন্তর্ভুক্তি ও দলীয় সমন্বয়' },
              { icon: '📊', title: 'কার্যক্রম পর্যবেক্ষণ', desc: 'মাঠপর্যায়ের কার্যক্রম নিয়মিত পর্যবেক্ষণ করেন' },
              { icon: '🤝', title: 'অংশীদারিত্ব', desc: 'সরকার ও অন্যান্য সংস্থার সাথে সমন্বয় করেন' },
              { icon: '📢', title: 'সচেতনতা', desc: 'মাতৃস্বাস্থ্য বিষয়ে সামাজিক সচেতনতা তৈরি করেন' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-blue-900 text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
