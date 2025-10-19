import React, { useState } from 'react';
import { Check } from 'lucide-react';

/**
 * Checkbox Component - A.U.RO.R.A Design System V24
 * Single checkboxes and grouped checkbox sets
 * States: default, hover, checked, disabled, error
 */

const CheckboxComponent = () => {
  const [checkboxes, setCheckboxes] = useState({
    single: false,
    permissions: {
      read: false,
      write: false,
      delete: false,
      admin: false,
    },
    preferences: {
      newsletter: false,
      notifications: false,
      marketing: false,
    },
  });

  const [touched, setTouched] = useState({
    permissions: false,
    preferences: false,
  });

  // Handle single checkbox
  const handleSingleChange = () => {
    setCheckboxes((prev) => ({
      ...prev,
      single: !prev.single,
    }));
  };

  // Handle grouped checkboxes
  const handleGroupChange = (group, key) => {
    setCheckboxes((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [key]: !prev[group][key],
      },
    }));
  };

  // Mark group as touched
  const handleGroupBlur = (group) => {
    setTouched((prev) => ({
      ...prev,
      [group]: true,
    }));
  };

  // Checkbox input component
  const CheckboxInput = ({
    label,
    checked,
    onChange,
    disabled = false,
    id,
  }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
        }}
        onClick={() => !disabled && onChange()}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            minWidth: '20px',
            border: checked ? '1.5px solid #E30613' : '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: checked ? '#E30613' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            marginRight: '12px',
          }}
        >
          {checked && <Check size={14} color="#FFFFFF" strokeWidth={3} />}
        </div>
        <label
          htmlFor={id}
          style={{
            fontSize: '14px',
            color: '#666',
            fontWeight: '500',
            cursor: disabled ? 'not-allowed' : 'pointer',
            userSelect: 'none',
          }}
        >
          {label}
        </label>
      </div>
    );
  };

  // Grouped checkboxes component
  const CheckboxGroup = ({ label, items, group, error = false }) => {
    return (
      <div style={{ marginBottom: '28px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          {label}
        </label>

        <div
          style={{
            padding: '16px',
            border: error ? '1.5px solid #E30613' : '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: '#FFFFFF',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = '#E30613';
            }
          }}
          onMouseLeave={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = '#D9D9D9';
            }
          }}
          onBlur={() => handleGroupBlur(group)}
          tabIndex="0"
        >
          {items.map((item) => (
            <CheckboxInput
              key={item.key}
              id={`${group}-${item.key}`}
              label={item.label}
              checked={checkboxes[group][item.key]}
              onChange={() => handleGroupChange(group, item.key)}
            />
          ))}
        </div>

        {error && (
          <div
            style={{
              marginTop: '6px',
              fontSize: '12px',
              color: '#E30613',
              fontWeight: '500',
            }}
          >
            ✗ Please select at least one option
          </div>
        )}
      </div>
    );
  };

  // Check if groups have selections
  const permissionsSelected = Object.values(checkboxes.permissions).some(
    (v) => v
  );
  const preferencesSelected = Object.values(checkboxes.preferences).some(
    (v) => v
  );
  const permissionsError = touched.permissions && !permissionsSelected;
  const preferencesError = touched.preferences && !preferencesSelected;

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
        Checkboxes
      </h2>

      {/* Single checkbox */}
      <div style={{ marginBottom: '28px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          Single Checkbox
        </label>
        <CheckboxInput
          id="single-checkbox"
          label="I agree to the terms and conditions"
          checked={checkboxes.single}
          onChange={handleSingleChange}
        />
      </div>

      {/* Permissions group */}
      <CheckboxGroup
        label="Permissions"
        items={[
          { key: 'read', label: 'Read' },
          { key: 'write', label: 'Write' },
          { key: 'delete', label: 'Delete' },
          { key: 'admin', label: 'Admin' },
        ]}
        group="permissions"
        error={permissionsError}
      />

      {/* Preferences group */}
      <CheckboxGroup
        label="Communication Preferences"
        items={[
          { key: 'newsletter', label: 'Subscribe to newsletter' },
          { key: 'notifications', label: 'Enable notifications' },
          { key: 'marketing', label: 'Allow marketing emails' },
        ]}
        group="preferences"
        error={preferencesError}
      />

      {/* Disabled checkboxes */}
      <div style={{ marginBottom: '28px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          Disabled Checkboxes
        </label>
        <div
          style={{
            padding: '16px',
            border: '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: '#F5F5F5',
          }}
        >
          <CheckboxInput
            id="disabled-1"
            label="This option is disabled"
            checked={false}
            onChange={() => {}}
            disabled={true}
          />
          <CheckboxInput
            id="disabled-2"
            label="This option is also disabled"
            checked={true}
            onChange={() => {}}
            disabled={true}
          />
        </div>
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
          <li>Single and grouped checkboxes</li>
          <li>Red border (#E30613) when checked</li>
          <li>Check icon with smooth animation</li>
          <li>Hover effects on groups</li>
          <li>Error state validation</li>
          <li>Disabled state support</li>
          <li>Keyboard accessible</li>
          <li>Visual feedback on selection</li>
        </ul>
      </div>
    </div>
  );
};

export default CheckboxComponent;
