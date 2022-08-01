export interface Product {
  id: string;
  name: string;
  description: string;
  ingredient: string;
  price: number;
  image: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
