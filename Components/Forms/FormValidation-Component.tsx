import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

/**
 * Form Validation Component - A.U.RO.R.A Design System V24
 * Complete form with validation, error states, success feedback, and loading
 * Demonstrates all validation patterns and feedback mechanisms
 */

const FormValidationComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    agreeTerms: false,
  });

  const [fieldStates, setFieldStates] = useState({
    fullName: { touched: false, error: '' },
    email: { touched: false, error: '' },
    password: { touched: false, error: '' },
    confirmPassword: { touched: false, error: '' },
    department: { touched: false, error: '' },
    agreeTerms: { touched: false, error: '' },
  });

  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  const [submitMessage, setSubmitMessage] = useState('');

  // Validators
  const validators = {
    fullName: (val) => {
      if (!val) return 'Full name is required';
      if (val.length < 3) return 'Name must be at least 3 characters';
      if (!/^[a-zA-Z\s]+$/.test(val)) return 'Name can only contain letters and spaces';
      return '';
    },
    email: (val) => {
      if (!val) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
        return 'Please enter a valid email address';
      return '';
    },
    password: (val) => {
      if (!val) return 'Password is required';
      if (val.length < 8) return 'Password must be at least 8 characters';
      if (!/[A-Z]/.test(val)) return 'Must contain uppercase letter';
      if (!/[a-z]/.test(val)) return 'Must contain lowercase letter';
      if (!/[0-9]/.test(val)) return 'Must contain a number';
      return '';
    },
    confirmPassword: (val) => {
      if (!val) return 'Please confirm your password';
      if (val !== formData.password) return 'Passwords do not match';
      return '';
    },
    department: (val) => {
      if (!val) return 'Please select a department';
      return '';
    },
    agreeTerms: (val) => {
      if (!val) return 'You must agree to the terms and conditions';
      return '';
    },
  };

  // Handle field change
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle blur (trigger validation)
  const handleBlur = (field) => {
    const error = validators[field](formData[field]);
    setFieldStates((prev) => ({
      ...prev,
      [field]: { touched: true, error },
    }));
  };

  // Validate entire form
  const validateForm = () => {
    const newStates = {};
    let isValid = true;

    Object.keys(validators).forEach((field) => {
      const error = validators[field](formData[field]);
      newStates[field] = { touched: true, error };
      if (error) isValid = false;
    });

    setFieldStates(newStates);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormState('error');
      setSubmitMessage('Please fix the errors above');
      return;
    }

    setFormState('submitting');

    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setSubmitMessage('Account created successfully! 🎉');
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        department: '',
        agreeTerms: false,
      });
      setFieldStates({
        fullName: { touched: false, error: '' },
        email: { touched: false, error: '' },
        password: { touched: false, error: '' },
        confirmPassword: { touched: false, error: '' },
        department: { touched: false, error: '' },
        agreeTerms: { touched: false, error: '' },
      });
    }, 1500);
  };

  // Form field component
  const FormField = ({ label, type, field, placeholder }) => {
    const { error, touched } = fieldStates[field];
    const hasError = touched && error;
    const isValid = touched && !error && formData[field];

    return (
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '6px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          {label}
        </label>
        <input
          type={type}
          value={formData[field]}
          onChange={(e) => handleFieldChange(field, e.target.value)}
          onBlur={() => handleBlur(field)}
          placeholder={placeholder}
          disabled={formState === 'submitting'}
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            fontFamily: 'Open Sans, sans-serif',
            border: hasError
              ? '1.5px solid #E30613'
              : isValid
              ? '1.5px solid #28A745'
              : '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: formState === 'submitting' ? '#F5F5F5' : '#FFFFFF',
            color: '#666',
            cursor: formState === 'submitting' ? 'not-allowed' : 'text',
            transition: 'all 0.2s ease',
            outline: 'none',
            paddingRight: '36px',
            position: 'relative',
          }}
        />
        {hasError && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: '#E30613',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <AlertCircle size={14} />
            {error}
          </div>
        )}
        {isValid && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: '#28A745',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <CheckCircle size={14} />
            Valid
          </div>
        )}
      </div>
    );
  };

  // Checkbox field
  const CheckboxField = ({ label, field }) => {
    const { error, touched } = fieldStates[field];
    const hasError = touched && error;

    return (
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <input
            type="checkbox"
            checked={formData[field]}
            onChange={(e) => handleFieldChange(field, e.target.checked)}
            onBlur={() => handleBlur(field)}
            disabled={formState === 'submitting'}
            style={{
              width: '18px',
              height: '18px',
              marginTop: '2px',
              cursor: 'pointer',
              accentColor: '#E30613',
            }}
          />
          <label
            style={{
              fontSize: '13px',
              color: '#666',
              cursor: 'pointer',
            }}
          >
            {label}
          </label>
        </div>
        {hasError && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: '#E30613',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginLeft: '26px',
            }}
          >
            <AlertCircle size={14} />
            {error}
          </div>
        )}
      </div>
    );
  };

  // Select field
  const SelectField = ({ label, field }) => {
    const { error, touched } = fieldStates[field];
    const hasError = touched && error;
    const isValid = touched && !error && formData[field];

    return (
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '6px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#003057',
          }}
        >
          {label}
        </label>
        <select
          value={formData[field]}
          onChange={(e) => handleFieldChange(field, e.target.value)}
          onBlur={() => handleBlur(field)}
          disabled={formState === 'submitting'}
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            fontFamily: 'Open Sans, sans-serif',
            border: hasError
              ? '1.5px solid #E30613'
              : isValid
              ? '1.5px solid #28A745'
              : '1.5px solid #D9D9D9',
            borderRadius: '4px',
            backgroundColor: formState === 'submitting' ? '#F5F5F5' : '#FFFFFF',
            color: formData[field] ? '#666' : '#999',
            cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            outline: 'none',
          }}
        >
          <option value="">Select department...</option>
          <option value="research">Research & Development</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="operations">Operations</option>
        </select>
        {hasError && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: '#E30613',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <AlertCircle size={14} />
            {error}
          </div>
        )}
        {isValid && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '12px',
              color: '#28A745',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <CheckCircle size={14} />
            Valid
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '32px 24px',
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#003057',
          marginBottom: '8px',
        }}
      >
        Create Account
      </h2>
      <p
        style={{
          fontSize: '14px',
          color: '#999',
          marginBottom: '24px',
        }}
      >
        Fill out the form below. All fields are required.
      </p>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Full Name"
          type="text"
          field="fullName"
          placeholder="John Doe"
        />

        <FormField
          label="Email Address"
          type="email"
          field="email"
          placeholder="john@example.com"
        />

        <FormField
          label="Password"
          type="password"
          field="password"
          placeholder="At least 8 characters"
        />

        <FormField
          label="Confirm Password"
          type="password"
          field="confirmPassword"
          placeholder="Re-enter password"
        />

        <SelectField label="Department" field="department" />

        <CheckboxField
          label="I agree to the terms and conditions"
          field="agreeTerms"
        />

        {/* Form status messages */}
        {formState === 'error' && (
          <div
            style={{
              marginBottom: '20px',
              padding: '12px',
              backgroundColor: '#FFF5F5',
              border: '1px solid #E30613',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#E30613',
            }}
          >
            <AlertCircle size={16} />
            {submitMessage}
          </div>
        )}

        {formState === 'success' && (
          <div
            style={{
              marginBottom: '20px',
              padding: '12px',
              backgroundColor: '#F0FDF4',
              border: '1px solid #28A745',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#28A745',
            }}
          >
            <CheckCircle size={16} />
            {submitMessage}
          </div>
        )}

        {formState === 'submitting' && (
          <div
            style={{
              marginBottom: '20px',
              padding: '12px',
              backgroundColor: '#F0F8FF',
              border: '1px solid #003057',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#003057',
            }}
          >
            <Info size={16} />
            Submitting form...
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: 'Open Sans, sans-serif',
            color: '#FFFFFF',
            backgroundColor: formState === 'submitting' ? '#999' : '#E30613',
            border: 'none',
            borderRadius: '4px',
            cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            marginTop: '8px',
            opacity: formState === 'submitting' ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (formState !== 'submitting') {
              e.currentTarget.style.backgroundColor = '#C30510';
            }
          }}
          onMouseLeave={(e) => {
            if (formState !== 'submitting') {
              e.currentTarget.style.backgroundColor = '#E30613';
            }
          }}
        >
          {formState === 'submitting' ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      {/* Info section */}
      <div
        style={{
          marginTop: '32px',
          padding: '16px',
          backgroundColor: '#F0F8FF',
          border: '1px solid #D9D9D9',
          borderRadius: '4px',
          fontSize: '12px',
          color: '#666',
          lineHeight: '1.6',
        }}
      >
        <strong>Validation Rules:</strong>
        <ul style={{ margin: '8px 0 0 20px', paddingLeft: 0 }}>
          <li>Full Name: 3+ characters, letters only</li>
          <li>Email: Valid email format</li>
          <li>Password: 8+ chars, uppercase, lowercase, number</li>
          <li>Confirm Password: Must match password</li>
          <li>Department: Required selection</li>
          <li>Terms: Must be checked</li>
          <li>Error messages appear on blur</li>
          <li>Form validates on submit</li>
          <li>Success state clears form after 1.5s</li>
        </ul>
      </div>
    </div>
  );
};

export default FormValidationComponent;