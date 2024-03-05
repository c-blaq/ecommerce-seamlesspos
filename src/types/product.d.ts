export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  additionalDetails?: {
    [key: string]: any;
  };
}
