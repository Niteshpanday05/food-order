import "./About.css";

const About = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <h1>Food Express</h1>
        <p>
          Delivering happiness at your doorstep with fresh food, fast delivery,
          and trusted local restaurants.
        </p>
      </section>

      {/* STORY */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p className="section-text">
          FoodieExpress was born with a simple idea — make food ordering easy,
          reliable, and enjoyable. We partner with top local restaurants and
          deliver meals with speed and care, ensuring every order brings a smile.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-section gray">
        <h2>What Makes Us Different</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3> Fast Delivery</h3>
            <p>Smart logistics ensure your food arrives hot and fresh.</p>
          </div>
          <div className="feature-card">
            <h3> Quality Restaurants</h3>
            <p>Carefully curated partners with high quality standards.</p>
          </div>
          <div className="feature-card">
            <h3> Secure Payments</h3>
            <p>Multiple payment options with complete transaction safety.</p>
          </div>
          <div className="feature-card">
            <h3> Easy Ordering</h3>
            <p>User-friendly app experience across all devices.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-section">
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>10K+</h3>
            <p>Orders Delivered</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Partner Restaurants</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Cities Served</p>
          </div>
          <div className="stat">
            <h3>4.8★</h3>
            <p>User Rating</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="about-section gray">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Choose your favorite restaurant</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Select your meal & place order</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Track delivery in real-time</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Enjoy delicious food!</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div className="faq-item">
            <h4>Do you charge delivery fees?</h4>
            <p>Delivery fees vary based on distance and restaurant.</p>
          </div>
          <div className="faq-item">
            <h4>Can I schedule an order?</h4>
            <p>Yes, you can pre-order meals for a later time.</p>
          </div>
          <div className="faq-item">
            <h4>Is online payment safe?</h4>
            <p>Absolutely. We use secure, encrypted payment gateways.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
