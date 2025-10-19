import React, { useState } from 'react';

/**
 * Input Component - A.U.RO.R.A Design System V24
 * Supports: text, email, password, number inputs with validation
 * States: default, hover, focus, disabled, error, success
 */

const InputComponent = () => {
  // Demo state for all input variants
  const [inputs, setInputs] = useState({
    text: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    password: { value: '', error: '', touched: false },
    number: { value: '', error: '', touched: false },
  });

  // Validation rules
  const validators = {
    email: (val) => {
      if (!val) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Invalid email format';
      return '';
    },
    password: (val) => {
      if (!val) return 'Password is required';
      if (val.length < 8) return 'Password must be at least 8 characters';
      return '';
    },
    text: (val) => {
      if (!val) return 'This field is required';
      if (val.length < 3) return 'Must be at least 3 characters';
      return '';
    },
    number: (val) => {
      if (!val) return 'Number is required';
      if (isNaN(val)) return 'Must be a valid number';
      if (val < 0) return 'Must be positive';
      return '';
    },
  };

  // Handle input change
  const handleChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: { ...prev[field], value },
    }));
  };

  // Handle blur (trigger validation)
  const handleBlur = (field) => {
    const validator = validators[field];
    const error = validator(inputs[field].value);
    setInputs((prev) => ({
      ...prev,
      [field]: { ...prev[field], error, touched: true },
    }));
  };

  // Input field component
  const InputField = ({ type, label, placeholder, field, disabled = false }) => {
    const { value, error, touched } = inputs[field];
    const hasError = touched && error;
    const isSuccess = touched && !error && value;

    return (
      <div style={{ marginBottom: '24px' }}>
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
        <input
          type={type}
          value={value}
          onChange={(e) => handleChange(field, e.target.value)}
          onBlur={() => handleBlur(field)}
          placeholder={placeholder}
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
            color: disabled ? '#999' : '#666',
            cursor: disabled ? 'not-allowed' : 'text',
            transition: 'all 0.2s ease',
            outline: 'none',
            boxShadow: 'none',
          }}
          onFocus={(e) => {
            if (!disabled) {
              e.target.style.borderColor = '#E30613';
            }
          }}
          onMouseEnter={(e) => {
            if (!disabled && !hasError && !isSuccess) {
              e.target.style.borderColor = '#E30613';
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled && !hasError && !isSuccess) {
              e.target.style.borderColor = '#D9D9D9';
            }
          }}
        />

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
        Input Fields
      </h2>

      <InputField
        type="text"
        label="Text Input"
        placeholder="Enter text (min 3 characters)"
        field="text"
      />

      <InputField
        type="email"
        label="Email Input"
        placeholder="your@email.com"
        field="email"
      />

      <InputField
        type="password"
        label="Password Input"
        placeholder="At least 8 characters"
        field="password"
      />

      <InputField
        type="number"
        label="Number Input"
        placeholder="Enter a positive number"
        field="number"
      />

      {/* Disabled input example */}
      <div style={{ marginBottom: '24px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          Disabled Input
        </label>
        <input
          type="text"
          value="This field is disabled"
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
          }}
        />
      </div>

      {/* Form info */}
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
        <strong>How it works:</strong>
        <ul style={{ margin: '8px 0 0 20px', paddingLeft: 0 }}>
          <li>Validation triggers on blur</li>
          <li>Error state: red border + error message</li>
          <li>Success state: green border + checkmark</li>
          <li>Hover: border changes to red on valid inputs</li>
          <li>Focus: red border highlight</li>
          <li>Disabled: gray background, not-allowed cursor</li>
        </ul>
      </div>
    </div>
  );
};

export default InputComponent;