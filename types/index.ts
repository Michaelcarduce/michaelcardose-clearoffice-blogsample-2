export interface NavItem {
  id: string;
  title: string;
  number: string;
  path?: string;
  hasDropdown?: boolean;
}

export interface DropdownItem {
  title: string;
  description: string;
  path: string;
  icon: string;
}

export interface NavDropdown {
  id: string;
  items: DropdownItem[];
}