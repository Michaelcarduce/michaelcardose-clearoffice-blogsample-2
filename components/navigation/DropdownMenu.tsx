'use client';

import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import { NavDropdown } from '../../types';

interface DropdownMenuProps {
  dropdown: NavDropdown;
}

export function DropdownMenu({ dropdown }: DropdownMenuProps) {
  const { items } = dropdown;
  
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 py-4 px-2">
      <div className="space-y-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all nav-item nav-dropdown"
          >
            <BarChart3 className="w-4 h-4" />
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}