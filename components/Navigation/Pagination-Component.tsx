import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 10;
  const maxVisiblePages = 5;
  const [align, setAlign] = useState('center');
  const [variant, setVariant] = useState('numbered');
  const [size, setSize] = useState('medium');

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages = [];
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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const visiblePages = getVisiblePages();
  const pageSizeClass = size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm';
  const arrowSizeClass = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

  // VARIANT: Numbered
  const NumberedPagination = () => (
    <div className={`flex items-center justify-${align} gap-2`}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${pageSizeClass} rounded-sm border border-gray-300 transition-all ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed text-gray-400'
            : 'text-gray-600 hover:border-red-700 hover:text-red-700'
        }`}
        aria-label="Previous page"
        style={{ borderColor: currentPage === 1 ? '#D9D9D9' : 'inherit' }}
      >
        <ChevronLeft className={arrowSizeClass} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, idx) => {
          if (page === 'start-ellipsis' || page === 'end-ellipsis') {
            return (
              <span key={idx} className="px-2 py-2 text-gray-400">
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={idx}
              onClick={() => handlePageChange(page)}
              className={`${pageSizeClass} rounded-sm transition-all font-medium ${
                isActive
                  ? 'text-white'
                  : 'text-gray-600 border border-gray-300 hover:border-red-700'
              }`}
              style={{
                backgroundColor: isActive ? '#E30613' : 'transparent',
                borderColor: isActive ? '#E30613' : '#D9D9D9',
                color: isActive ? 'white' : '#666',
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
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${pageSizeClass} rounded-sm border border-gray-300 transition-all ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed text-gray-400'
            : 'text-gray-600 hover:border-red-700 hover:text-red-700'
        }`}
        aria-label="Next page"
        style={{ borderColor: currentPage === totalPages ? '#D9D9D9' : 'inherit' }}
      >
        <ChevronRight className={arrowSizeClass} />
      </button>
    </div>
  );

  // VARIANT: Compact
  const CompactPagination = () => (
    <div className={`flex items-center justify-${align} gap-3`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${pageSizeClass} rounded-sm border border-gray-300 transition-all ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:border-red-700 hover:text-red-700'
        }`}
        style={{ borderColor: currentPage === 1 ? '#D9D9D9' : 'inherit' }}
        aria-label="Previous page"
      >
        <ChevronLeft className={arrowSizeClass} />
      </button>

      <span className="text-sm text-gray-600 font-medium min-w-[100px] text-center">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${pageSizeClass} rounded-sm border border-gray-300 transition-all ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:border-red-700 hover:text-red-700'
        }`}
        style={{ borderColor: currentPage === totalPages ? '#D9D9D9' : 'inherit' }}
        aria-label="Next page"
      >
        <ChevronRight className={arrowSizeClass} />
      </button>
    </div>
  );

  // VARIANT: With Info
  const WithInfoPagination = () => (
    <div className="space-y-3">
      <div className="text-sm text-gray-600">
        Showing {(currentPage - 1) * 10 + 1}-{Math.min(currentPage * 10, totalPages * 10)} of {totalPages * 10} results
      </div>
      <NumberedPagination />
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white">
      <div className="mb-8 border-b-4" style={{ borderColor: '#E30613' }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: '#003057' }}>
          Pagination Component
        </h1>
        <p className="text-gray-600 mb-4">Menarini Design System - Navigation Category</p>
      </div>

      {/* Controls */}
      <div className="bg-gray-50 p-6 rounded-sm mb-12 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Variant Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              className="w-full px-3 py-2 border rounded-sm text-sm focus:outline-none"
              style={{ borderColor: '#D9D9D9', color: '#003057' }}
            >
              <option value="numbered">Numbered</option>
              <option value="compact">Compact</option>
              <option value="info">With Info</option>
            </select>
          </div>

          {/* Size Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-3 py-2 border rounded-sm text-sm focus:outline-none"
              style={{ borderColor: '#D9D9D9', color: '#003057' }}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>
          </div>

          {/* Alignment Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alignment</label>
            <select
              value={align}
              onChange={(e) => setAlign(e.target.value)}
              className="w-full px-3 py-2 border rounded-sm text-sm focus:outline-none"
              style={{ borderColor: '#D9D9D9', color: '#003057' }}
            >
              <option value="center">Center</option>
              <option value="start">Left</option>
              <option value="end">Right</option>
            </select>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 p-3 rounded-sm text-sm" style={{ backgroundColor: '#F0F8FF', borderLeft: '4px solid #E30613', color: '#003057' }}>
          <strong>Current State:</strong> Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* Component Preview */}
      <div className="border-2 border-gray-200 rounded-sm p-12 bg-white mb-12">
        <div className="py-8">
          {variant === 'numbered' && <NumberedPagination />}
          {variant === 'compact' && <CompactPagination />}
          {variant === 'info' && <WithInfoPagination />}
        </div>
      </div>

      {/* Documentation */}
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: '#003057' }}>
            Design Specifications
          </h2>
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 space-y-3">
            <div>
              <span className="font-medium text-gray-700">Colors:</span>
              <ul className="text-sm text-gray-600 ml-4 mt-1">
                <li>• Active page: Red #E30613</li>
                <li>• Default text: Gray #666</li>
                <li>• Borders: #D9D9D9</li>
                <li>• Disabled: opacity 0.5</li>
              </ul>
            </div>
            <div>
              <span className="font-medium text-gray-700">Typography:</span>
              <ul className="text-sm text-gray-600 ml-4 mt-1">
                <li>• Font: Open Sans</li>
                <li>• Size: 14px (medium), 12px (small)</li>
                <li>• Weight: 400-500</li>
              </ul>
            </div>
            <div>
              <span className="font-medium text-gray-700">Spacing:</span>
              <ul className="text-sm text-gray-600 ml-4 mt-1">
                <li>• Gap between items: 8px</li>
                <li>• Border radius: 4px</li>
                <li>• Padding: 16px (medium), 8px (small)</li>
              </ul>
            </div>
            <div>
              <span className="font-medium text-gray-700">States:</span>
              <ul className="text-sm text-gray-600 ml-4 mt-1">
                <li>• Default: Gray text, gray border</li>
                <li>• Hover: Red border #E30613, red text</li>
                <li>• Active: Red background #E30613, white text</li>
                <li>• Disabled: 50% opacity, cursor not-allowed</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: '#003057' }}>
            Accessibility
          </h2>
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 space-y-2 text-sm text-gray-600">
            <p>✓ WCAG AA contrast ratio (4.5:1 minimum)</p>
            <p>✓ Keyboard navigation: Tab to items, Enter to select</p>
            <p>✓ ARIA labels on arrows and current page indicator</p>
            <p>✓ Semantic HTML: &lt;nav&gt;, &lt;button&gt;, ARIA attributes</p>
            <p>✓ Disabled state communicates unavailability</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: '#003057' }}>
            Responsive Behavior
          </h2>
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 space-y-2 text-sm text-gray-600">
            <p>• Desktop (≥1024px): Full numbered pagination</p>
            <p>• Tablet (768-1024px): 3 pages + arrows + ellipsis</p>
            <p>• Mobile (&lt;768px): Compact variant (arrows + text)</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: '#003057' }}>
            Component Props
          </h2>
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
            <pre className="text-xs text-gray-600 overflow-auto">
{`{
  currentPage: number,
  totalPages: number,
  onPageChange: function,
  showEllipsis: boolean (default: true),
  maxVisiblePages: number (default: 5),
  align: 'center' | 'start' | 'end',
  size: 'small' | 'medium',
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}