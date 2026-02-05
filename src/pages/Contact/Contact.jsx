import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🍕 Our team will reach you soon!");
  };

  return (
    <section className="contact-wrapper">
      {/* Hero */}
      <div className="contact-hero">
        <h1>Need Help?</h1>
        <p>We’re always here to make your food experience better 🍔</p>

        <div className="support-buttons">
          <a href="tel:+9779800000000">📞 Call</a>
          <a href="mailto:support@foodieexpress.com">📧 Email</a>
          <a href="#">💬 Chat</a>
        </div>
      </div>

      {/* Glass Card */}
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Support</h2>

          <div className="input-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <select required>
              <option value=""></option>
              <option>Late Delivery</option>
              <option>Wrong Order</option>
              <option>Payment Issue</option>
              <option>Refund Query</option>
              <option>Other</option>
            </select>
            <label>Issue Type</label>
          </div>

          <div className="input-group">
            <textarea rows="4" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit">Send Message</button>

          <p className="privacy">
            🔒 Your details are safe with us.
          </p>
        </form>

        {/* Info */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>Kathmandu, Nepal</p>
          <p>+977 9800000000</p>
          <p>support@foodieexpress.com</p>

          <div className="info-box">
            🚨 Order issue? Call us for faster resolution.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
