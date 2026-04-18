import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import Logo from './Logo';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" />
              <div>
                <div className="text-xl font-bold">মা সেবা সোসাইটি</div>
                <div className="text-teal-400 text-sm">Ma Seba Society</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              মাতৃ কালিন মায়েদের আস্থার প্রতিষ্ঠান। সুস্থ শিশু আগামীর ভবিষ্যৎ — তাই আগামীর ভবিষ্যৎকে সুস্থ রাখার লক্ষ্যে আমাদের মা সেবা।
            </p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
            >
              <Facebook size={18} />
              <span className="text-sm">Ma seba মা সেবা</span>
            </a>
          </div>

          <div>
            <h3 className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              {[
                { label: 'হোম', page: 'home' as Page },
                { label: 'কেন মা সেবা?', page: 'why-maseba' as Page },
                { label: 'সম্পর্কে', page: 'about' as Page },
                { label: 'পরিচালনা পরিষদ', page: 'board' as Page },
                { label: 'আমাদের সেবা', page: 'services' as Page },
                { label: 'সংবাদ', page: 'news' as Page },
                { label: 'গ্যালারি', page: 'gallery' as Page },
              ].map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-blue-200 text-sm">
                <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <span>ফেনি, ৩৯০০, বাংলাদেশ</span>
              </li>
              <li>
                <a href="tel:+8801832698111" className="flex items-center gap-2.5 text-blue-200 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="text-teal-400 shrink-0" />
                  <span>+880 1832-698111</span>
                </a>
              </li>
              <li>
                <a href="mailto:masebabd@gmail.com" className="flex items-center gap-2.5 text-blue-200 hover:text-white text-sm transition-colors">
                  <Mail size={16} className="text-teal-400 shrink-0" />
                  <span>masebabd@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-blue-200 text-sm">
                <span className="text-teal-400 shrink-0">🌐</span>
                <span>masebabd.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-blue-400 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} মা সেবা সোসাইটি। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-blue-500 text-xs">মাতৃ কালিন মায়েদের আস্থার প্রতিষ্ঠান</p>
        </div>
      </div>
    </footer>
  );
}
