"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useNavigation } from "../../lib/hooks/useNavigation";
import { navItems, dropdowns } from "../../lib/data/mock-data";
import { NavItem } from "./NavItem";
import { DropdownMenu } from "./DropdownMenu";
import { CTAButton } from "./CTAButton";
import { MobileMenu } from "./MobileMenu";

interface NavigationProps {
  variant?: "default" | "blog" | "home";
  ctaText?: string;
  transparent?: boolean;
}

export function Navigation({
  variant = "default",
  ctaText = "Book A Call",
  transparent = false,
}: NavigationProps = {}) {
  const { activeDropdown, handleDropdownToggle } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine background style based on variant and transparent prop
  const navBackground = transparent
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-sm";

  // Determine text color based on variant
  const textColor = variant === "blog" ? "text-gray-800" : "text-gray-700";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 ${navBackground} ${
        variant === "blog" ? "border-b border-gray-100" : ""
      }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025_06_16-ClearOffice-Logo-AygSrB5ISpOwW9eRnl6TuCaV3Kuiia.png"
            alt="ClearOffice Logo"
            width={200}
            height={50}
            className="h-13 w-auto"
          />
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <NavItem
                item={item}
                isActive={activeDropdown === item.id}
                onClick={() =>
                  item.hasDropdown && handleDropdownToggle(item.id)
                }
                className={textColor}
              />
              {item.hasDropdown &&
                activeDropdown === item.id &&
                dropdowns[item.id] && (
                  <DropdownMenu dropdown={dropdowns[item.id]} />
                )}
            </div>
          ))}

          {/* CTA Button */}
          <CTAButton text={ctaText} />
        </div>

        {/* CTA Button */}
        {/* <CTAButton text="Book A Call" /> */}

        {/* Mobile Menu Button (hidden in desktop) */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          ctaText={ctaText}
          variant={variant}
        />
      </div>
    </nav>
  );
}
