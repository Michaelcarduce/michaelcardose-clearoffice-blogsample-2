import { useState } from 'react';

export function useNavigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return {
    activeDropdown,
    handleDropdownToggle
  };
}