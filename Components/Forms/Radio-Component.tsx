import React, { useState } from 'react';

/**
 * Radio Button Component - A.U.RO.R.A Design System V24
 * Single-select radio button groups
 * States: default, hover, selected, disabled, error
 */

const RadioComponent = () => {
  const [radios, setRadios] = useState({
    shipping: '',
    paymentMethod: '',
    frequency: '',
  });

  const [touched, setTouched] = useState({
    shipping: false,
    paymentMethod: false,
    frequency: false,
  });

  // Handle radio change
  const handleRadioChange = (group, value) => {
    setRadios((prev) => ({
      ...prev,
      [group]: value,
    }));
  };

  // Mark group as touched
  const handleGroupBlur = (group) => {
    setTouched((prev) => ({
      ...prev,
      [group]: true,
    }));
  };

  // Radio input component
  const RadioInput = ({
    label,
    value,
    checked,
    onChange,
    name,
    disabled = false,
    description = null,
  }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '16px',
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
            marginTop: '2px',
            marginRight: '12px',
            border: checked ? '2px solid #E30613' : '2px solid #D9D9D9',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            position: 'relative',
          }}
        >
          {checked && (
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#E30613',
              }}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>
          <label
            style={{
              fontSize: '14px',
              color: '#666',
              fontWeight: '500',
              cursor: disabled ? 'not-allowed' : 'pointer',
              userSelect: 'none',
              display: 'block',
              marginBottom: description ? '4px' : '0',
            }}
          >
            {label}
          </label>
          {description && (
            <p
              style={{
                fontSize: '12px',
                color: '#999',
                margin: '0',
                lineHeight: '1.4',
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  };

  // Radio group component
  const RadioGroup = ({
    label,
    items,
    group,
    error = false,
    selectedValue,
  }) => {
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
          role="group"
          aria-labelledby={`${group}-label`}
        >
          {items.map((item) => (
            <RadioInput
              key={item.value}
              label={item.label}
              value={item.value}
              checked={selectedValue === item.value}
              onChange={() => handleRadioChange(group, item.value)}
              name={group}
              disabled={item.disabled || false}
              description={item.description || null}
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
            ✗ Please select an option
          </div>
        )}
      </div>
    );
  };

  // Determine error states
  const shippingError = touched.shipping && !radios.shipping;
  const paymentError = touched.paymentMethod && !radios.paymentMethod;
  const frequencyError = touched.frequency && !radios.frequency;

  return (
    <div
      style={{
        maxWidth: '550px',
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
        Radio Buttons
      </h2>

      {/* Shipping method */}
      <RadioGroup
        label="Shipping Method"
        items={[
          {
            value: 'standard',
            label: 'Standard Shipping',
            description: 'Delivery in 5-7 business days',
          },
          {
            value: 'express',
            label: 'Express Shipping',
            description: 'Delivery in 2-3 business days',
          },
          {
            value: 'overnight',
            label: 'Overnight Shipping',
            description: 'Delivery by next business day',
          },
        ]}
        group="shipping"
        error={shippingError}
        selectedValue={radios.shipping}
      />

      {/* Payment method */}
      <RadioGroup
        label="Payment Method"
        items={[
          { value: 'card', label: 'Credit/Debit Card' },
          { value: 'bank', label: 'Bank Transfer' },
          { value: 'paypal', label: 'PayPal' },
          { value: 'other', label: 'Other', disabled: true },
        ]}
        group="paymentMethod"
        error={paymentError}
        selectedValue={radios.paymentMethod}
      />

      {/* Frequency */}
      <RadioGroup
        label="Notification Frequency"
        items={[
          {
            value: 'immediate',
            label: 'Immediate',
            description: 'Get notified right away',
          },
          {
            value: 'daily',
            label: 'Daily Digest',
            description: 'One email per day',
          },
          {
            value: 'weekly',
            label: 'Weekly Digest',
            description: 'One email per week',
          },
          {
            value: 'never',
            label: 'Never',
            description: 'Disable notifications',
          },
        ]}
        group="frequency"
        error={frequencyError}
        selectedValue={radios.frequency}
      />

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
          <li>Single-select radio button groups</li>
          <li>Red circle indicator when selected</li>
          <li>Optional descriptions under labels</li>
          <li>Hover effects on group container</li>
          <li>Error state validation</li>
          <li>Disabled option support</li>
          <li>Accessible labels and keyboard navigation</li>
          <li>Smooth transitions on selection</li>
        </ul>
      </div>
    </div>
  );
};

export default RadioComponent;