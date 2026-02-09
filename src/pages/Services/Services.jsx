import { lazy, Suspense } from "react";
import "./Services.css";
import servicesData from "./servicesData";
import Button from "../../components/ui/Button/Button";

const ServiceCard = lazy(() => import("./ServiceCard"));

const Services = () => {
  return (
    <section className="services-page">

      {/* HERO */}
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>
          We deliver delicious meals from your favorite restaurants straight
          to your doorstep — fast, safe, and reliable.
        </p>
      </div>

      {/* SERVICES */}
      <Suspense fallback={<p className="loading">Loading services...</p>}>
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Suspense>

      {/* HOW IT WORKS */}
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">Choose Food</div>
          <div className="step">Place Order</div>
          <div className="step">Fast Delivery</div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="why-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>✔ 24/7 Delivery Service</li>
          <li>✔ Verified Restaurants</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Friendly Delivery Partners</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="services-cta">
        <h2>Hungry Right Now?</h2>
        <p>Browse our menu and place your order instantly.</p>
        <Button to="/menu">Go to Menu</Button>
      </div>

    </section>
  );
};

export default Services;
