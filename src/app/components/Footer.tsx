'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

// Define types for menu items
type MenuItem = {
  text: string;
  href: string;
};

// Define menu sections
const resourceMenuItems: MenuItem[] = [
  { text: 'Guides', href: '/guides' },
  { text: 'Research', href: '/research' },
  { text: 'Blog', href: '/blog' },
  { text: 'FAQ', href: '/faq' },
];

const involvementMenuItems: MenuItem[] = [
  { text: 'Join Us', href: '/join' },
  { text: 'Volunteer', href: '/volunteer' },
];

const regionsMenuItems: MenuItem[] = [
  { text: 'North Island', href: '/regions/north-island' },
  { text: 'South Island', href: '/regions/south-island' },
  { text: 'Stewart Island', href: '/regions/stewart-island' },
  { text: 'Antarctica', href: '/regions/antarctica' },
];

const communityMenuItems: MenuItem[] = [
  { text: 'Events', href: '/events' },
  { text: 'Forums', href: '/forums' },
  { text: 'Discord', href: '/discord' },
  { text: 'Meetups', href: '/meetups' },
  { text: 'Partners', href: '/partners' },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-800 py-12 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-24 h-24 rounded-lg bg-zinc-700/50">{/* Square Logo placeholder */}</div>
          <div className="w-64 h-16 rounded-lg bg-zinc-700/50">{/* Rectangular Logo placeholder */}</div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">CryptocurrencyNZ</h3>
            <p className="text-gray-400 text-sm mb-4">
              Cryptocurrency NZ is a New Zealand grassroots crypto community organization and guide powering the physical and digital social infrastructure of NZ's crypto revolution.
            </p>
            <p className="text-gray-400 text-sm mb-4">NZBN: 9429050677559</p>
            
            <div className="flex gap-4">
              <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Twitter size={20} aria-label="Twitter" />
              </Link>
              <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Facebook size={20} aria-label="Facebook" />
              </Link>
              <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Instagram size={20} aria-label="Instagram" />
              </Link>
              <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <Linkedin size={20} aria-label="LinkedIn" />
              </Link>
            </div>
            
            <div className="w-1/2 h-auto flex items-center justify-center text-gray-600 mt-4">
              <div className="relative w-full h-20 ml-10 animate-shake">
                <Image 
                  src="/images/CNZ logo.png" 
                  alt="CryptocurrencyNZ Logo"
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation Menus */}
          <div className="grid grid-cols-2 gap-8">
            {/* Resources & Get Involved */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourceMenuItems.map((item) => (
                  <li key={item.text}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-white font-bold text-lg mt-6 mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {involvementMenuItems.map((item) => (
                  <li key={item.text}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions & Community */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Regions</h3>
              <ul className="space-y-2">
                {regionsMenuItems.map((item) => (
                  <li key={item.text}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-white font-bold text-lg mt-6 mb-4">Community</h3>
              <ul className="space-y-2">
                {communityMenuItems.map((item) => (
                  <li key={item.text}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} className="text-green-400" />
                  Christchurch, New Zealand + 10 locations
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail size={16} className="text-green-400" />
                  <a href="mailto:contact@cryptocurrency.org.nz" className="hover:text-green-400 transition-colors">
                    contact@cryptocurrency.org.nz
                  </a>
                </li>
              </ul>
              
              <div className="w-full h-32 relative flex items-center justify-center text-gray-600 mt-4">
                <div className="relative w-1/4 h-full ml-10">
                  <Image 
                    src="/images/Blockchain-NZ-logo-removebg-preview.png" 
                    alt="Blockchain NZ Logo"
                    fill
                    sizes="(max-width: 768px) 100px, 150px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
              
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                           focus:outline-none focus:border-green-500 text-gray-300 text-sm"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 
                           transition-colors rounded-lg text-black font-medium text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} CryptocurrencyNZ. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;