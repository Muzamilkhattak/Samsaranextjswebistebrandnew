"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handlePhoneInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === "+" && value.length === 0) return;
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
      e.preventDefault();
    }
  };

  const handleNameInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === " " && value.length === 0) {
      e.preventDefault();
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
      e.preventDefault();
      return;
    }
    if (e.key === " " && value[value.length - 1] === " ") {
      e.preventDefault();
    }
  };

  const handleEmailInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === " " && value.indexOf(" ") === -1) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Clear previous invalid classes
    const inputs = form.querySelectorAll('.form-control, .form-select');
    inputs.forEach((input) => input.classList.remove('is-invalid'));
    
    let isValid = true;
    inputs.forEach((input) => {
      if (!(input as HTMLInputElement).checkValidity()) {
        input.classList.add('is-invalid');
        isValid = false;
      }
    });

    const phoneInput = form.querySelector('#phone_number') as HTMLInputElement;
    if (phoneInput && phoneInput.value.length !== 14) {
      phoneInput.classList.add('is-invalid');
      isValid = false;
    }

    if (isValid) {
      setIsSubmitting(true);
      setErrorMessage('');

      const formData = new FormData(form);
      const data: Record<string, any> = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        const response = await fetch("https://formspree.io/f/mldenkyz", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          form.reset();
          window.location.href = "/thank-you"; // Adapted to standard thank-you route
        } else {
          const resData = await response.json();
          throw new Error(resData.error || "Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage('There was an error submitting the form. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Format phone number visually
  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      value = value.match(new RegExp(".{1,3}", "g"))?.join(" ") || value;
    }
    
    // We want the format (XXX) XXX-XXXX
    let formatted = e.target.value.replace(/\D/g, "");
    if (formatted.length > 10) formatted = formatted.substring(0, 10);
    
    if (formatted.length > 6) {
      formatted = `(${formatted.substring(0, 3)}) ${formatted.substring(3, 6)}-${formatted.substring(6, 10)}`;
    } else if (formatted.length > 3) {
      formatted = `(${formatted.substring(0, 3)}) ${formatted.substring(3)}`;
    } else if (formatted.length > 0) {
      formatted = `(${formatted}`;
    }
    e.target.value = formatted;
  };

  return (
    <main className="booking-page" style={{ position: 'relative', zIndex: 1, backgroundColor: '#004438' }}>
      {/* Import Bootstrap exactly for this component to not pollute global scope completely, though Next.js will inject it globally */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100..900&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{__html: `
        .booking-page .vh-100 { min-height: 100vh; height: auto; padding: 50px 0; }
        .booking-page {
            background-image: url('/booking-images/background.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
        }
        .form-container {
            background: transparent;
            border-radius: 1px;
            padding: 20px;
            box-shadow: #ECE9F466;
            border-bottom: #C4C4C4;
        }
        .custom-green-btn {
            background-color: #1A4339;
            color: white;
            border-bottom: none;
            padding: 12px;
            font-size: 1.1rem;
        }
        .custom-green-btn:hover {
            background-color: #0d2620;
            color: white;
        }
        .booking-page .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            max-width: 300px;
            margin: 0 auto;
        }
        .booking-page .logo img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
        .title {
            font-size: 46px;
            font-family: "Encode Sans", sans-serif;
            font-weight: 400;
            color: #1A4339;
        }
        @media (min-width: 576px) { .contain { width: 50%; } }
        @media (max-width: 1000px) { .contain { width: 90%; } }
        
        .call-widget { position: fixed; bottom: 30px; right: 30px; z-index: 9999; animation: fadeInUp 0.5s ease-in-out; }
        .call-widget a { display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: linear-gradient(135deg, #004438 0%, #006B54 100%); border-radius: 50%; box-shadow: 0 4px 15px rgba(0, 68, 56, 0.4); text-decoration: none; transition: all 0.3s ease; position: relative; animation: pulse 2s infinite; }
        .call-widget a:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(0, 68, 56, 0.6); }
        .call-widget a::before { content: ''; position: absolute; top: -5px; left: -5px; right: -5px; bottom: -5px; border-radius: 50%; border: 2px solid #004438; opacity: 0; animation: ripple 2s infinite; }
        .call-widget svg { width: 28px; height: 28px; fill: white; }
        .call-widget-tooltip { position: absolute; right: 75px; top: 50%; transform: translateY(-50%); background: white; color: #004438; padding: 10px 20px; border-radius: 25px; font-size: 16px; font-weight: 600; white-space: nowrap; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
        .call-widget:hover .call-widget-tooltip { opacity: 1; }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes ripple { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.3); opacity: 0; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .call-widget { bottom: 20px; right: 20px; } .call-widget a { width: 55px; height: 55px; } .call-widget svg { width: 24px; height: 24px; } .call-widget-tooltip { display: none; } }
      `}} />

      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <div className="logo">
          <img src="/booking-images/logo.png" alt="Samsara Aesthetics & Wellness logo" />
        </div>
        <div className="contain mx-auto">
          <div className="d-flex justify-content-center align-items-center">
            <div className="form-container w-100">
              <form id="myForm" noValidate onSubmit={handleSubmit}>
                <p className="text-center fs-6 text-white fw-semibold">
                  YOUR TRANSFORMATION BEGINS HERE
                </p>
                <h1 className="text-center mb-4 fs-1 text-white fw-semibold">
                  Book Your Consultation
                </h1>

                {/* Full Name and Phone */}
                <div className="row mb-4 g-3">
                  <div className="col-md-6 col-sm-12">
                    <input
                      type="text"
                      onKeyDown={handleNameInput}
                      maxLength={40}
                      className="form-control text-body-secondary p-2"
                      id="full_name"
                      name="full_name"
                      placeholder="Full Name"
                      required
                      pattern="^[A-Za-z\s\-]+$"
                    />
                    <div className="invalid-feedback">Full Name is required.</div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <input
                      type="tel"
                      onKeyDown={handlePhoneInput}
                      onChange={formatPhoneNumber}
                      minLength={14}
                      maxLength={14}
                      className="form-control text-body-secondary p-2"
                      id="phone_number"
                      name="phone_number"
                      placeholder="Phone Number"
                      autoComplete="off"
                      required
                      pattern="^\+1?\(?([2-9][0-9]{2})\)?[ .-]?[2-9][0-9]{2}[ .-]?[0-9]{4}$"
                    />
                    <div className="invalid-feedback">Phone number must be valid</div>
                  </div>
                </div>

                {/* Email and Procedure of Interest */}
                <div className="row mb-3 g-3">
                  <div className="col-md-6 col-sm-12">
                    <input
                      type="email"
                      onKeyDown={handleEmailInput}
                      maxLength={50}
                      className="form-control text-body-secondary p-2"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <div className="invalid-feedback">Email address is required.</div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <select
                      className="form-select text-body-secondary p-2"
                      id="procedure"
                      name="procedure_of_interest"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Procedure of Interest
                      </option>
                      <option value="Laser Hair Removal">Laser Hair Removal</option>
                      <option value="Injectables">Injectables</option>
                      <option value="Dermal Fillers and Neuromodulators">Dermal Fillers and Neuromodulators</option>
                      <option value="PRP/PRF Treatments">PRP/PRF Treatments</option>
                      <option value="Laser and Energy Treatments">Laser and Energy Treatments</option>
                      <option value="Plasma Skin Tightening">Plasma Skin Tightening</option>
                      <option value="IPL">IPL</option>
                      <option value="Morpheus8">Morpheus8</option>
                      <option value="Laser Hair Removal ">Laser Hair Removal </option>
                      <option value="Wellness">Wellness</option>
                      <option value="Physician Guided Weight Loss Therapy">Physician Guided Weight Loss Therapy</option>
                      <option value="IV Hydration">IV Hydration</option>
                      <option value="Injectables for Wellness">Injectables for Wellness</option>
                      <option value="Lymphatic Drainage ">Lymphatic Drainage </option>
                      <option value="Skincare">Skincare</option>
                      <option value="Chemical Peels">Chemical Peels</option>
                      <option value="HydraFacials">HydraFacials</option>
                    </select>
                    <div className="invalid-feedback">Please select a procedure.</div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className={`btn custom-green-btn w-100 submit ${isSubmitting ? 'disabled' : ''}`}
                      id="submitButton"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
              
              {errorMessage && (
                <div id="errorMessage" className="text-center text-danger mt-3">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="call-widget">
        <a href="tel:+19546887255" aria-label="Call us at (954) 688-7255">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="call-widget-tooltip">(954) 688-7255</span>
        </a>
      </div>
    </main>
  );
}
