"use client";

import React, { useState } from 'react';

export default function ScheduleConsultForm() {
  const [formData, setFormData] = useState({
    FullName: '',
    Phone: '',
    Email: '',
    ProcedureOfInterest: '',
    HearOfUs: '',
    BestTime: '',
    Message: '',
    TextOptin: false,
    ZipCode: '', // honeypot
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isChecked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? isChecked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digits = rawValue.replace(/\D/g, '');
    let formatted = rawValue;

    if (!rawValue.startsWith('+')) {
      if (digits.length <= 3) {
        formatted = digits.length > 0 ? `(${digits}` : '';
      } else if (digits.length <= 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      }
    }

    setFormData((prev) => ({
      ...prev,
      Phone: formatted,
    }));

    if (errors.Phone) {
      setErrors((prev) => ({
        ...prev,
        Phone: false,
      }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const validate = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.FullName.trim() || formData.FullName.trim().length < 2) {
      newErrors.FullName = true;
    }

    const digits = formData.Phone.replace(/\D/g, '');
    if (!formData.Phone.trim() || digits.length < 10) {
      newErrors.Phone = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.Email.trim() || !emailRegex.test(formData.Email.trim())) {
      newErrors.Email = true;
    }

    if (!formData.ProcedureOfInterest) {
      newErrors.ProcedureOfInterest = true;
    }

    if (!formData.HearOfUs) {
      newErrors.HearOfUs = true;
    }

    if (!formData.BestTime) {
      newErrors.BestTime = true;
    }

    if (!formData.Message.trim()) {
      newErrors.Message = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot
    if (formData.ZipCode) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) {
      setErrorMessage('Please fill in all required fields.');
      const firstErrorField = document.querySelector(
        '.contact-form .is-invalid'
      ) as HTMLElement | null;
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mldenkyz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FullName: formData.FullName.trim(),
          Phone: formData.Phone.trim(),
          Email: formData.Email.trim(),
          ProcedureOfInterest: formData.ProcedureOfInterest,
          HearOfUs: formData.HearOfUs,
          BestTime: formData.BestTime,
          Message: formData.Message.trim(),
          TextOptin: formData.TextOptin ? 'Yes Opt-in to Text' : 'No',
          gtagevent: 'contact_form',
          LeadSource: 'Organic',
        }),
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'contact_form_submit');
        }
        setIsSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('There was an issue submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getErrorStyle = (hasError: boolean) =>
    hasError
      ? {
          borderColor: '#dc3545',
          boxShadow: '0 0 0 1px #dc3545',
        }
      : undefined;

  return (
    <div className="contact-form">
      <style>{`
        .contact-form .is-invalid {
          border-color: #dc3545 !important;
          box-shadow: 0 0 0 1px #dc3545 !important;
        }
        .contact-form .select.is-invalid,
        .contact-form .select.is-invalid select {
          border-color: #dc3545 !important;
          box-shadow: 0 0 0 1px #dc3545 !important;
        }
      `}</style>

      {isSubmitted ? (
        <div
          className="schedule-consult-thankyou"
          style={{
            backgroundColor: '#ffffff',
            padding: '75px 35px',
            textAlign: 'center',
            borderRadius: '4px',
            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: '400px',
          }}
        >
          <h3
            style={{
              fontFamily:
                '"novecento-sans", "proxima-nova", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '26px',
              lineHeight: 1.25,
            }}
          >
            THANK YOU FOR YOUR REQUEST
          </h3>
          <p
            style={{
              fontFamily: '"proxima-nova", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(18px, 1.8vw, 24px)',
              color: '#4a4a4a',
              lineHeight: 1.5,
              fontWeight: 300,
              margin: 0,
              maxWidth: '440px',
            }}
          >
            We will get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit}
          className="form"
          name="contactForm"
          aria-label="Contact Form"
        >
          {errorMessage && (
            <div
              style={{
                color: '#dc3545',
                backgroundColor: '#fff0f0',
                border: '1px solid #ffd6d6',
                padding: '10px 15px',
                borderRadius: '4px',
                marginBottom: '15px',
                fontSize: '14px',
                textAlign: 'center',
                width: '100%',
                fontWeight: 500,
              }}
            >
              {errorMessage}
            </div>
          )}

          <div className="input-wrap text is-one-third">
            <input
              name="FullName"
              aria-label="Full Name"
              placeholder="Full Name*"
              type="text"
              aria-required="true"
              required
              value={formData.FullName}
              onChange={handleChange}
              className={errors.FullName ? 'is-invalid' : ''}
              style={getErrorStyle(errors.FullName)}
            />
          </div>

          <div className="input-wrap text is-one-third">
            <input
              name="Phone"
              aria-label="Phone Number"
              placeholder="Phone Number*"
              type="tel"
              aria-required="true"
              required
              value={formData.Phone}
              onChange={handlePhoneChange}
              className={errors.Phone ? 'is-invalid' : ''}
              style={getErrorStyle(errors.Phone)}
            />
          </div>

          <div className="input-wrap text is-one-third">
            <input
              name="Email"
              aria-label="Email Address"
              placeholder="Email Address*"
              type="email"
              aria-required="true"
              required
              value={formData.Email}
              onChange={handleChange}
              className={errors.Email ? 'is-invalid' : ''}
              style={getErrorStyle(errors.Email)}
            />
          </div>

          <div className="input-wrap is-one-third">
            <span
              className={`select ${errors.ProcedureOfInterest ? 'is-invalid' : ''}`}
              style={getErrorStyle(errors.ProcedureOfInterest)}
            >
              <select
                id="Schedule"
                name="ProcedureOfInterest"
                aria-label="Procedure of Interest"
                aria-required="true"
                required
                value={formData.ProcedureOfInterest}
                onChange={handleChange}
                className={errors.ProcedureOfInterest ? 'is-invalid' : ''}
                style={getErrorStyle(errors.ProcedureOfInterest)}
              >
                <option value="" disabled>
                  Procedure of Interest*
                </option>
                <option value="Injectables">Injectables</option>
                <option value="Dermal Fillers and Neuromodulators">
                  Dermal Fillers and Neuromodulators
                </option>
                <option value="PRP/PRF Treatments">PRP/PRF Treatments</option>
                <option value="Laser and Energy Treatments">Laser and Energy Treatments</option>
                <option value="Plasma Skin Tightening">Plasma Skin Tightening</option>
                <option value="IPL">IPL</option>
                <option value="Morpheus8">Morpheus8</option>
                <option value="Laser Hair Removal ">Laser Hair Removal </option>
                <option value="Forma">Forma</option>
                <option value="Wellness">Wellness</option>
                <option value="Physician Guided Weight Loss Therapy">
                  Physician Guided Weight Loss Therapy
                </option>
                <option value="Massage Therapy">Massage Therapy</option>
                <option value="IV Hydration">IV Hydration</option>
                <option value="Injectables for Wellness">Injectables for Wellness</option>
                <option value="Lymphatic Drainage ">Lymphatic Drainage </option>
                <option value="Life Coaching and Mental Wellness">
                  Life Coaching and Mental Wellness
                </option>
                <option value="Skincare">Skincare</option>
                <option value="Chemical Peels">Chemical Peels</option>
                <option value="HydraFacials">HydraFacials</option>
              </select>
            </span>
          </div>

          <div className="input-wrap is-one-third">
            <span
              className={`select ${errors.HearOfUs ? 'is-invalid' : ''}`}
              style={getErrorStyle(errors.HearOfUs)}
            >
              <select
                id="HearOfUs"
                name="HearOfUs"
                aria-label="How Did You Hear of Us?*"
                required
                value={formData.HearOfUs}
                onChange={handleChange}
                className={errors.HearOfUs ? 'is-invalid' : ''}
                style={getErrorStyle(errors.HearOfUs)}
              >
                <option value="" disabled>
                  How Did You Hear of Us?*
                </option>
                <option value="Website">Website</option>
                <option value="Friend">Friend</option>
                <option value="Google Search">Google Search</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Previous Patient">Previous Patient</option>
                <option value="Other">Other</option>
              </select>
            </span>
          </div>

          <div className="input-wrap is-one-third">
            <span
              className={`select ${errors.BestTime ? 'is-invalid' : ''}`}
              style={getErrorStyle(errors.BestTime)}
            >
              <select
                id="BestTime"
                name="BestTime"
                aria-label="Best Time To Reach You*"
                required
                value={formData.BestTime}
                onChange={handleChange}
                className={errors.BestTime ? 'is-invalid' : ''}
                style={getErrorStyle(errors.BestTime)}
              >
                <option value="" disabled>
                  Best Time To Reach You*
                </option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
              </select>
            </span>
          </div>

          <div className="input-wrap text is-full">
            <textarea
              id="Message"
              name="Message"
              aria-label="Message"
              data-hj-whitelist
              placeholder="How can we assist your aesthetic needs?*"
              maxLength={280}
              required
              value={formData.Message}
              onChange={handleChange}
              className={errors.Message ? 'is-invalid' : ''}
              style={getErrorStyle(errors.Message)}
            />
          </div>

          <div className="input-wrap is-full checkbox mb10" style={{ paddingTop: 0 }}>
            <input
              name="TextOptin"
              aria-label="Yes Opt-in to Text"
              placeholder="Yes Opt-in to Text"
              type="checkbox"
              checked={formData.TextOptin}
              onChange={handleChange}
            />
            <p className="optin-terms">
              By checking this box you agree to receive SMS messages from Samsara Aesthetics &amp;
              Wellness regarding appointments and specials. Standard messaging rates may apply
            </p>
          </div>

          <div className="input-wrap text is-full" style={{ display: 'none' }}>
            <input
              name="ZipCode"
              aria-label="Zip Code (Do Not Fill Out)"
              aria-hidden="true"
              placeholder="Zip Code*"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.ZipCode}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrap">
            <button
              type="submit"
              aria-label="Submit Form"
              className="button light box-shadow-smooth mb0"
              disabled={isSubmitting}
              style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : undefined}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}{' '}
              <img
                src="/assets/img/_defaults/arrow-right-highlight.svg"
                title="Submit Form"
                alt="right arrow"
              />
            </button>
          </div>

          <div className="input-wrap">
            <span className="title-sm text-center consult-phone">
              <a
                className="tel-link"
                href="tel:(954) 688-7255"
                onClick={() =>
                  typeof window !== 'undefined' &&
                  (window as any).eval?.(`gtag('event', 'phone_number_click');`)
                }
                aria-label="Call Samsara Aesthetics & Wellness"
              >
                (954) 688-7255
              </a>
            </span>
          </div>

          <input type="hidden" name="gtagevent" value="contact_form" />
          <input type="hidden" name="LeadSource" value="Organic" />
        </form>
      )}
    </div>
  );
}
