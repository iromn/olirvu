export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ValueItem {
  title: string;
  description?: string;
}

export interface TestimonialItem {
  id: number;
  title: string;
  text: string;
}
