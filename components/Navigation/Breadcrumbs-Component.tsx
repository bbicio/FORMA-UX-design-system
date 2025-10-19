import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  separator?: string;
  onNavigate?: (href: string) => void;
}

export default function Breadcrumbs({
  items = [],
  separator = '›',
  onNavigate = () => {},
}: BreadcrumbsProps) {
  return (
    <nav className="text-sm" style={{ color: '#666' }} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {/* Separator */}
            {idx > 0 && (
              <span style={{ color: '#666', margin: '0 4px' }} aria-hidden="true">
                {separator}
              </span>
            )}

            {/* Link or Text */}
            {item.href ? (
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href!);
                }}
                className="transition-colors cursor-pointer hover:underline"
                style={{ color: '#666' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E30613')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
              >
                {item.label}
              </a>
            ) : (
              <span
                style={{ color: '#666' }}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}