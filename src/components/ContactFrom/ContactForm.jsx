import React, { useState } from "react";
import Image from 'next/image';
import SimpleReactValidator from "simple-react-validator";

// Import your icons








const ContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null,
  });

  const [validator] = useState(
    new SimpleReactValidator({ className: "errorMessage" })
  );

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (validator.allValid()) validator.hideMessages();
    else validator.showMessages();
  };

  const fileHandler = (e) => {
    const file = e.target.files?.[0] || null;
    setForms({ ...forms, file });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      console.log("✅ Form submitted:", forms);
      alert("Form submitted successfully!");

      setForms({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        file: null,
      });
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={submitHandler} className="xb-contact-input-form">
      <div className="row mt-none-20">
        {/* Name */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-name">Your Name*</label>
            <Image src="/images/icon/user-balck-icon.svg" style={{width: "18px"}} alt="user" width={500} height={500} />
          </div>
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Email */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-email">Email Address*</label>
            <Image src="/images/icon/sms-balck-icon.svg" style={{width: "18px"}} alt="email" width={500} height={500} />
          </div>
          {validator.message("email", forms.email, "required|email")}
        </div>

        {/* Phone */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field">
            <input
              id="author-phone"
              name="phone"
              type="text"
              value={forms.phone}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-phone">Contact No*</label>
            <Image src="/images/icon/call-icon02.svg" alt="phone" style={{width: "18px"}} width={500} height={500} />
          </div>
          {validator.message("phone", forms.phone, "required|numeric")}
        </div>

        {/* File Upload */}
        {/* <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field xb-select-file">
            <input type="file" onChange={fileHandler} />
            <Image src="/images/icon/upload-icon.svg" style={{width: "18px"}} alt="upload" width={500} height={500} />
            <span>{forms.file ? forms.file.name : "Attach file..."}</span>
          </div>
        </div> */}

        {/* Select Field */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="service"
              value={forms.service}
              onChange={changeHandler}
              required
              className="nice-select"
            >
              <option value="">Current monthly processing volume*</option>
              <option value="AI - marketing">$0 - $10,000</option>
              <option value="AI consulting">$10,000 - $50,000</option>
              <option value="AI chatbot virtual">$50,000 - $100,000</option>
            </select>
            <Image src="/images/icon/list-icon.svg" style={{width: "18px"}} alt="list" width={500} height={500} />
          </div>
          {validator.message("service", forms.service, "required")}
        </div>

        {/* Message */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="massage">Your Message..</label>
            <Image src="/images/icon/messages-icon.svg" style={{width: "18px"}} alt="message" width={500} height={500} />
          </div>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-submit-btn mt-35">
        <button type="submit" className="thm-btn form-btn">
          Submit Here
          <span className="xb-icon">
            <Image src="/images/icon/rotate-arrow-black02.svg" alt="arrow" width={500} height={500} />
            <Image src="/images/icon/rotate-arrow-black02.svg" alt="arrow" width={500} height={500} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
