const icons = {
  delivery: "🚚",
  fresh: "🥗",
  order: "📱",
  payment: "💳"
};

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <article
      className="service-card"
      tabIndex="0"
      role="article"
      aria-labelledby={title}
    >
      <div className="service-icon" aria-hidden="true">
        {icons[icon]}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </article>
  );
};

export default ServiceCard;
