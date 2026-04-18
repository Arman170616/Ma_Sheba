import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isAdmin: boolean;
  onLogout: () => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'হোম', page: 'home' },
  { label: 'কেন মা সেবা?', page: 'why-maseba' },
  { label: 'সম্পর্কে', page: 'about' },
  { label: 'পরিচালনা পরিষদ', page: 'board' },
  { label: 'আমাদের সেবা', page: 'services' },
  { label: 'অফিস', page: 'office' },
  { label: 'সংবাদ', page: 'news' },
  { label: 'গ্যালারি', page: 'gallery' },
];

export default function Navbar({ currentPage, onNavigate, isAdmin, onLogout }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-blue-900 text-white text-sm py-1.5 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6 text-blue-200">
          <a href="tel:+8801832698111" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} />
            <span>+880 1832-698111</span>
          </a>
          <a href="mailto:masebabd@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={13} />
            <span>masebabd@gmail.com</span>
          </a>
        </div>
        <span className="text-blue-200 text-xs">মাতৃ কালিন মায়েদের আস্থার প্রতিষ্ঠান</span>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => handleNav('home')} className="flex items-center gap-3">
              <Logo size="sm" />
              <div className="text-left">
                <div className="text-blue-900 font-bold text-lg leading-tight">মা সেবা</div>
                <div className="text-teal-700 text-xs leading-tight">সোসাইটি</div>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => handleNav(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  {label}
                </button>
              ))}
              {isAdmin ? (
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={() => handleNav('admin-dashboard')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === 'admin-dashboard'
                        ? 'bg-teal-700 text-white'
                        : 'text-teal-700 hover:bg-teal-50'
                    }`}
                  >
                    অ্যাডমিন প্যানেল
                  </button>
                  <button
                    onClick={onLogout}
                    className="px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
                  >
                    লগআউট
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNav('admin-login')}
                  className="ml-2 px-4 py-2 bg-teal-700 text-white rounded-md text-sm font-medium hover:bg-teal-800 transition-colors"
                >
                  অ্যাডমিন
                </button>
              )}
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => handleNav(page)}
                  className={`text-left px-4 py-2.5 rounded-md text-sm font-medium transition-all ${
                    currentPage === page
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  {label}
                </button>
              ))}
              {isAdmin ? (
                <>
                  <button
                    onClick={() => handleNav('admin-dashboard')}
                    className="text-left px-4 py-2.5 rounded-md text-sm font-medium text-teal-700 hover:bg-teal-50"
                  >
                    অ্যাডমিন প্যানেল
                  </button>
                  <button
                    onClick={onLogout}
                    className="text-left px-4 py-2.5 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    লগআউট
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNav('admin-login')}
                  className="text-left px-4 py-2.5 rounded-md text-sm font-medium bg-teal-700 text-white"
                >
                  অ্যাডমিন লগইন
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
