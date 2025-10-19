import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderNavigationProps {
  navItems?: NavItem[];
  logoText?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  onSearch?: (query: string) => void;
}

export default function HeaderNavigation({
  navItems = [
    { label: 'Research', href: '#' },
    { label: 'Pipeline', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'About', href: '#' },
  ],
  logoText = 'Menarini',
  ctaLabel = 'Get Started',
  onCtaClick = () => {},
  onSearch = () => {},
}: HeaderNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white" style={{ borderTop: '4px solid #E30613' }}>
      {/* Main Header */}
      <div className="h-24 flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: '#E30613' }}
          >
            M
          </div>
          <span className="font-bold hidden sm:block" style={{ color: '#003057' }}>
            {logoText}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{ color: '#666' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E30613')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Search + CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-sm transition-colors hover:bg-gray-100"
            style={{ color: '#003057' }}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className="hidden sm:block px-4 py-2 text-white rounded-sm font-medium text-sm transition-opacity"
            style={{ backgroundColor: '#E30613' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {ctaLabel}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 transition-colors hover:bg-gray-100"
            style={{ color: '#003057' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t px-6 py-4" style={{ borderTopColor: '#E0E0E0' }}>
          <div className="flex items-center gap-2 max-w-2xl">
            <Search size={18} style={{ color: '#666' }} />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 border rounded-sm text-sm focus:outline-none"
              style={{ borderColor: '#D9D9D9' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#E30613')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#D9D9D9')}
              onChange={(e) => onSearch(e.currentTarget.value)}
              aria-label="Search input"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t px-6 py-4 space-y-3" style={{ borderTopColor: '#E0E0E0' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm font-medium py-2 transition-colors"
              style={{ color: '#666' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E30613')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onCtaClick}
            className="w-full mt-4 px-4 py-2 text-white rounded-sm font-medium text-sm transition-opacity"
            style={{ backgroundColor: '#E30613' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {ctaLabel}
          </button>
        </nav>
      )}
    </header>
  );
}