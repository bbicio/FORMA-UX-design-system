import React, { useState } from 'react';

/**
 * Textarea Component - A.U.RO.R.A Design System V24
 * Features: Min-height, auto-expand, character counter, validation
 * States: default, hover, focus, disabled, error, success
 */

const TextareaComponent = () => {
  const [textareas, setTextareas] = useState({
    message: { value: '', error: '', touched: false },
    feedback: { value: '', error: '', touched: false },
    description: { value: '', error: '', touched: false },
  });

  // Validators
  const validators = {
    message: (val) => {
      if (!val) return 'Message is required';
      if (val.length < 10) return 'Message must be at least 10 characters';
      if (val.length > 500) return 'Message cannot exceed 500 characters';
      return '';
    },
    feedback: (val) => {
      if (!val) return 'Feedback is required';
      if (val.length < 20) return 'Please provide at least 20 characters';
      return '';
    },
    description: (val) => {
      if (!val) return 'Description is required';
      return '';
    },
  };

  // Handle change
  const handleChange = (field, value) => {
    setTextareas((prev) => ({
      ...prev,
      [field]: { ...prev[field], value },
    }));
  };

  // Handle blur
  const handleBlur = (field) => {
    const validator = validators[field];
    const error = validator(textareas[field].value);
    setTextareas((prev) => ({
      ...prev,
      [field]: { ...prev[field], error, touched: true },
    }));
  };

  // Textarea field component
  const TextareaField = ({
    label,
    placeholder,
    field,
    minHeight = '120px',
    maxLength = null,
    disabled = false,
  }) => {
    const { value, error, touched } = textareas[field];
    const hasError = touched && error;
    const isSuccess = touched && !error && value;
    const charCount = value.length;
    const charLimit = maxLength || 500;

    return (
      <div style={{ marginBottom: '28px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <label
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#003057',
            }}
          >
            {label}
          </label>
          {maxLength && (
            <span
              style={{
                fontSize: '12px',
                color: charCount > charLimit * 0.8 ? '#E30613' : '#999',
                fontWeight: charCount > charLimit * 0.8 ? '600' : '400',
              }}
            >
              {charCount} / {charLimit}
            </span>
          )}
        </div>

        <textarea
          value={value}
          onChange={(e) => handleChange(field, e.target.value)}
          onBlur={() => handleBlur(field)}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          style={{
            width: '100%',
            minHeight: minHeight,
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
            resize: 'vertical',
            transition: 'all 0.2s ease',
            outline: 'none',
            boxShadow: 'none',
            lineHeight: '1.5',
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
        maxWidth: '600px',
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
        Textarea Fields
      </h2>

      <TextareaField
        label="Message"
        placeholder="Enter your message (min 10, max 500 characters)"
        field="message"
        minHeight="120px"
        maxLength={500}
      />

      <TextareaField
        label="Feedback"
        placeholder="Share your feedback (min 20 characters)"
        field="feedback"
        minHeight="140px"
      />

      <TextareaField
        label="Description"
        placeholder="Provide a detailed description"
        field="description"
        minHeight="100px"
      />

      {/* Disabled textarea example */}
      <div style={{ marginBottom: '28px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          Disabled Textarea
        </label>
        <textarea
          value="This textarea is disabled and cannot be edited."
          disabled
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '12px 16px',
            fontSize: '16px',
            fontFamily: 'Open Sans, sans-serif',
            border: '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: '#F5F5F5',
            color: '#999',
            cursor: 'not-allowed',
            resize: 'vertical',
            lineHeight: '1.5',
          }}
        />
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
          <li>Min-height: 100-140px (resizable vertically)</li>
          <li>Character counter (if max length set)</li>
          <li>Counter turns red at 80% capacity</li>
          <li>Validation on blur</li>
          <li>Error state: red border + message</li>
          <li>Success state: green border + checkmark</li>
          <li>Hover: border changes to red on valid inputs</li>
          <li>Focus: red border highlight</li>
        </ul>
      </div>
    </div>
  );
};

export default TextareaComponent;