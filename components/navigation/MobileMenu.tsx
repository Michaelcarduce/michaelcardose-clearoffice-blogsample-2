"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navItems, dropdowns } from "../../lib/data/mock-data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  ctaText?: string;
  variant?: "default" | "blog" | "home";
}

export function MobileMenu({
  isOpen,
  onClose,
  ctaText = "Book A Call",
  variant = "default",
}: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex justify-end p-6">
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="px-6 py-8 space-y-6">
        {navItems.map((item) => (
          <div key={item.id} className="border-b border-gray-100 pb-4">
            {item.path && !item.hasDropdown ? (
              <Link
                href={item.path}
                className="flex items-center justify-between py-2"
                onClick={onClose}>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-blue-600">{item.number}</span>
                  <span className="font-medium">{item.title}</span>
                </div>
              </Link>
            ) : (
              <>
                <div
                  className="flex items-center justify-between py-2"
                  onClick={() => toggleExpand(item.id)}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-600">{item.number}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {item.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === item.id ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </div>
                {expandedItem === item.id && dropdowns[item.id] && (
                  <div className="pl-6 mt-2 space-y-2">
                    {dropdowns[item.id].items.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={subItem.path}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={onClose}>
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        <div className="pt-4">
          <button
            className="w-full py-3 px-4 text-center text-white font-medium rounded-full"
            style={{
              background: "linear-gradient(135deg, #0071e3 40%, #764ba2 100%)",
            }}
            onClick={onClose}>
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}
