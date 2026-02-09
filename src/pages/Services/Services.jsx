import { useEffect, useRef, useState } from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";
import ServicesSkeleton from "./ServicesSkeleton";
import { servicesData } from "./servicesData";

const Services = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services ${visible ? "show" : ""}`}
      aria-label="Food delivery services"
    >
      <div className="services-container">
        <h2 className="services-title">Why Choose FoodExpress?</h2>
        <p className="services-subtitle">
          We deliver happiness, not just food 🍔
        </p>

        <div className="services-grid">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ServicesSkeleton key={i} />
              ))
            : servicesData.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
