export interface CoffeeCardProps {
  id?: number;
  image: string;
  popular: boolean;
  name: string;
  price: string;
  rating: number | null;
  votes: number;
  available: boolean;
}
