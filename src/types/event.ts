export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  price: string;
  category: string;
  url: string;
}

export interface EventFilters {
  search: string;
  category: string;
}