/**
 * Button Component
 * Reusable button component with primary and secondary variants.
 * Follows STERA brand colors and includes hover scale animation.
 * 
 * Props:
 * - children: React.ReactNode - button content
 * - variant: "primary" | "secondary" - button style variant
 * - href: string (optional) - if provided, renders as a link
 * - onClick: function (optional) - click handler
 * - className: string (optional) - additional CSS classes
 */

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-steraGold text-white shadow-glow hover:bg-opacity-90 focus:ring-steraGold",
    secondary:
      "border-2 border-steraGray text-steraGray hover:bg-steraGray hover:text-white focus:ring-steraGray",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
