import { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      as: Component = "button",
      loading = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={`btn btn--${variant} btn--${size} ${className}`}
        disabled={Component === "button" ? disabled || loading : undefined}
        aria-busy={loading}
        {...props}
      >
        {loading ? <span className="btn__spinner" /> : children}
      </Component>
    );
  }
);

export default Button;
