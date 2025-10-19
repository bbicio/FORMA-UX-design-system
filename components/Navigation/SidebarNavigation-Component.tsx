import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface SidebarNavigationProps {
  items?: NavItem[];
  activeItem?: string | null;
  isOpen?: boolean;
  onToggle?: () => void;
  onNavigate?: (href: string) => void;
}

export default function SidebarNavigation({
  items = [],
  activeItem = null,
  isOpen = true,
  onToggle = () => {},
  onNavigate = () => {},
}: SidebarNavigationProps) {
  return (
    <nav
      className="bg-white transition-all duration-300 overflow-hidden"
      style={{
        width: isOpen ? '200px' : '0px',
        borderRight: '1px solid #E0E0E0',
        minHeight: '100vh',
      }}
      aria-label="Sidebar Navigation"
    >
      <ul className="space-y-0">
        {items.map((item) => {
          const isActive = activeItem === item.href;
          return (
            <li key={item.href}>
              <button
                onClick={() => onNavigate(item.href)}
                className="w-full text-left px-4 py-4 text-sm font-medium transition-colors"
                style={{
                  color: isActive ? '#E30613' : '#666',
                  backgroundColor: 'transparent',
                  borderLeft: isActive ? '2px solid #E30613' : 'none',
                  paddingLeft: isActive ? 'calc(1rem - 2px)' : '1rem',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#F5F5F5';
                    e.currentTarget.style.color = '#E30613';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#666';
                  }
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}