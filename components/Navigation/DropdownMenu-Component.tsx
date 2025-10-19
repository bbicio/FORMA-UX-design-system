import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  id: string;
  onClick?: () => void;
}

interface DropdownMenuProps {
  trigger?: React.ReactNode;
  items?: DropdownItem[];
  onClose?: () => void;
  align?: 'left' | 'right';
}

export default function DropdownMenu({
  trigger = 'Options',
  items = [],
  onClose = () => {},
  align = 'left',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onClose();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-sm transition-all"
        style={{
          backgroundColor: isOpen ? '#F5F5F5' : 'transparent',
          borderColor: '#D9D9D9',
          color: '#003057',
          border: '1.5px solid',
        }}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown
          size={16}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full mt-2 bg-white rounded-sm shadow-lg z-40 min-w-max"
          style={{
            [align === 'left' ? 'left' : 'right']: 0,
            border: '1.5px solid #D9D9D9',
          }}
          onKeyDown={handleKeyDown}
          role="menu"
        >
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.id} role="none">
                <button
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                    onClose();
                  }}
                  className="w-full text-left px-4 py-2 text-sm transition-colors"
                  style={{ color: '#666' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F5';
                    e.currentTarget.style.color = '#E30613';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#666';
                  }}
                  role="menuitem"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}