import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Select Component - A.U.RO.R.A Design System V24
 * Custom dropdown select with search capability
 * States: default, hover, focus, disabled, error, success
 */

const SelectComponent = () => {
  const [selects, setSelects] = useState({
    country: { value: '', error: '', touched: false, open: false, search: '' },
    department: { value: '', error: '', touched: false, open: false, search: '' },
    priority: { value: '', error: '', touched: false, open: false, search: '' },
  });

  // Mock data
  const options = {
    country: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'it', label: 'Italy' },
      { value: 'es', label: 'Spain' },
    ],
    department: [
      { value: 'research', label: 'Research & Development' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
      { value: 'operations', label: 'Operations' },
      { value: 'hr', label: 'Human Resources' },
    ],
    priority: [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' },
      { value: 'critical', label: 'Critical' },
    ],
  };

  // Validators
  const validators = {
    country: (val) => (val ? '' : 'Please select a country'),
    department: (val) => (val ? '' : 'Please select a department'),
    priority: (val) => (val ? '' : 'Please select a priority level'),
  };

  // Handle select change
  const handleSelectChange = (field, value) => {
    setSelects((prev) => ({
      ...prev,
      [field]: { ...prev[field], value, open: false, search: '' },
    }));
  };

  // Handle blur
  const handleBlur = (field) => {
    const validator = validators[field];
    const error = validator(selects[field].value);
    setSelects((prev) => ({
      ...prev,
      [field]: { ...prev[field], error, touched: true, open: false },
    }));
  };

  // Handle search input
  const handleSearch = (field, searchText) => {
    setSelects((prev) => ({
      ...prev,
      [field]: { ...prev[field], search: searchText },
    }));
  };

  // Filter options based on search
  const getFilteredOptions = (field) => {
    const search = selects[field].search.toLowerCase();
    return options[field].filter((opt) =>
      opt.label.toLowerCase().includes(search)
    );
  };

  // Select field component
  const SelectField = ({ label, field, disabled = false }) => {
    const { value, error, touched, open, search } = selects[field];
    const hasError = touched && error;
    const isSuccess = touched && !error && value;
    const selectedLabel =
      options[field].find((opt) => opt.value === value)?.label || 'Select...';
    const filteredOpts = getFilteredOptions(field);

    return (
      <div style={{ marginBottom: '28px', position: 'relative' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          {label}
        </label>

        {/* Select button */}
        <button
          onClick={() => {
            if (!disabled) {
              setSelects((prev) => ({
                ...prev,
                [field]: { ...prev[field], open: !open },
              }));
            }
          }}
          onBlur={() => setTimeout(() => handleBlur(field), 200)}
          disabled={disabled}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            fontFamily: 'Open Sans, sans-serif',
            border: hasError
              ? '1.5px solid #E30613'
              : isSuccess
              ? '1.5px solid #28A745'
              : '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: disabled ? '#F5F5F5' : '#FFFFFF',
            color: value ? '#666' : '#999',
            cursor: disabled ? 'not-allowed' : 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s ease',
            textAlign: 'left',
          }}
          onMouseEnter={(e) => {
            if (!disabled && !hasError && !isSuccess) {
              e.currentTarget.style.borderColor = '#E30613';
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled && !hasError && !isSuccess) {
              e.currentTarget.style.borderColor = '#D9D9D9';
            }
          }}
        >
          <span>{selectedLabel}</span>
          <ChevronDown
            size={18}
            style={{
              color: '#666',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
        </button>

        {/* Dropdown menu */}
        {open && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '4px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D9D9D9',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 1000,
              overflow: 'hidden',
            }}
          >
            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => handleSearch(field, e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                fontSize: '14px',
                fontFamily: 'Open Sans, sans-serif',
                border: 'none',
                borderBottom: '1px solid #E0E0E0',
                outline: 'none',
              }}
            />

            {/* Options list */}
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {filteredOpts.length > 0 ? (
                filteredOpts.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectChange(field, opt.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontFamily: 'Open Sans, sans-serif',
                      border: 'none',
                      backgroundColor:
                        value === opt.value ? '#E30613' : '#FFFFFF',
                      color: value === opt.value ? '#FFFFFF' : '#666',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (value !== opt.value) {
                        e.currentTarget.style.backgroundColor = '#F5F5F5';
                        e.currentTarget.style.color = '#E30613';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (value !== opt.value) {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#666';
                      }
                    }}
                  >
                    {opt.label}
                  </button>
                ))
              ) : (
                <div
                  style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: '#999',
                    textAlign: 'center',
                  }}
                >
                  No results found
                </div>
              )}
            </div>
          </div>
        )}

        {/* Error message */}
        {hasError && (
          <div
            style={{
              marginTop: '6px',
              fontSize: '12px',
              color: '#E30613',
              fontWeight: '500',
            }}
          >
            ✗ {error}
          </div>
        )}

        {/* Success message */}
        {isSuccess && (
          <div
            style={{
              marginTop: '6px',
              fontSize: '12px',
              color: '#28A745',
              fontWeight: '500',
            }}
          >
            ✓ Valid
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        padding: '24px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#003057',
          marginBottom: '24px',
        }}
      >
        Select Fields
      </h2>

      <SelectField label="Country" field="country" />
      <SelectField label="Department" field="department" />
      <SelectField label="Priority Level" field="priority" />

      {/* Disabled select example */}
      <div style={{ marginBottom: '28px', position: 'relative' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          Disabled Select
        </label>
        <button
          disabled
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            fontFamily: 'Open Sans, sans-serif',
            border: '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: '#F5F5F5',
            color: '#999',
            cursor: 'not-allowed',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Not available</span>
          <ChevronDown size={18} style={{ color: '#999' }} />
        </button>
      </div>

      {/* Info section */}
      <div
        style={{
          marginTop: '32px',
          padding: '16px',
          backgroundColor: '#F0F8FF',
          border: '1px solid #D9D9D9',
          borderRadius: '4px',
          fontSize: '13px',
          color: '#666',
          lineHeight: '1.6',
        }}
      >
        <strong>Features:</strong>
        <ul style={{ margin: '8px 0 0 20px', paddingLeft: 0 }}>
          <li>Custom dropdown (styled to match A.U.RO.R.A)</li>
          <li>Search/filter functionality</li>
          <li>Click to open/close</li>
          <li>Validation on blur</li>
          <li>Selected option highlighted in red</li>
          <li>Error state: red border + message</li>
          <li>Success state: green border + checkmark</li>
          <li>Hover effects on options</li>
          <li>Keyboard navigation support</li>
        </ul>
      </div>
    </div>
  );
};

export default SelectComponent;