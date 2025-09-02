"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { NavItem as NavItemType } from "../../types";

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export function NavItem({
  item,
  isActive,
  onClick,
  className = "",
}: NavItemProps) {
  const { id, title, number, path, hasDropdown } = item;

  const content = (
    <>
      <div className="flex items-left justify-start gap-1">
        <span className="text-xs font-medium leading-none">{number}</span>
        {hasDropdown && (
          <ChevronDown
            className={`w-3 h-3 transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      <span className="font-medium text-sm">{title}</span>
    </>
  );

  const baseClasses =
    "flex flex-col items-start transition-colors whitespace-nowrap";
  const activeClasses =
    path === "/" && !hasDropdown
      ? "text-gray-800"
      : "text-gray-700 hover:text-gray-800 cursor-pointer";
  const dropdownClasses = hasDropdown ? "nav-item nav-dropdown" : "";

  if (path && !hasDropdown) {
    return (
      <Link
        href={path}
        className={`${baseClasses} ${activeClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`${baseClasses} ${activeClasses} ${dropdownClasses} ${className}`}
      onClick={onClick}>
      {content}
    </div>
  );
}
