import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  maxVisiblePages?: number;
  align?: 'start' | 'center' | 'end';
  size?: 'small' | 'medium';
}

export default function Pagination({
  currentPage = 3,
  totalPages = 10,
  onPageChange = () => {},
  maxVisiblePages = 5,
  align = 'center',
  size = 'medium'
}: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) pages.push('start-ellipsis');
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages) pages.push('end-ellipsis');

    return pages;
  };

  const visiblePages = getVisiblePages();
  const pageSizeClass = size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm';
  const arrowSizeClass = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';
  const justifyClass = `justify-${align}`;

  return (
    <div className={`flex items-center ${justifyClass} gap-2`}>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${pageSizeClass} rounded-sm border transition-all ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:border-red-700 hover:text-red-700'
        }`}
        style={{
          borderColor: currentPage === 1 ? '#D9D9D9' : '#D9D9D9',
          color: currentPage === 1 ? '#999' : '#666',
          borderWidth: '1.5px'
        }}
        aria-label="Previous page"
      >
        <ChevronLeft className={arrowSizeClass} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, idx) => {
          if (page === 'start-ellipsis' || page === 'end-ellipsis') {
            return (
              <span key={idx} className="px-2 py-2" style={{ color: '#999' }}>
                ...
              </span>
            );
          }

          const isActive = page === currentPage;
          return (
            <button
              key={idx}
              onClick={() => onPageChange(page as number)}
              className={`${pageSizeClass} rounded-sm transition-all font-medium`}
              style={{
                backgroundColor: isActive ? '#E30613' : 'transparent',
                borderColor: isActive ? '#E30613' : '#D9D9D9',
                color: isActive ? 'white' : '#666',
                borderWidth: '1.5px',
                borderStyle: 'solid'
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${pageSizeClass} rounded-sm border transition-all`}
        style={{
          borderColor: currentPage === totalPages ? '#D9D9D9' : '#D9D9D9',
          color: currentPage === totalPages ? '#999' : '#666',
          borderWidth: '1.5px'
        }}
        aria-label="Next page"
      >
        <ChevronRight className={arrowSizeClass} />
      </button>
    </div>
  );
}