export interface Product {
  id?: string;
  name: string;
  description: string;
  ingredient: string;
  price: number;
  image: string;
  categoryId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Table {
  id?: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Favorite {
  id?: string;
  userId: string;
  productName: string;
  favoritedAt?: Date;
}

export interface Order {
  id?: string;
  tableNumber?: number;
  userId: string;
  createdAt?: Date;
}

export interface OrderToProduct {
  id?: string;
  productId: string;
  orderId: string;
  quantity: number;
  createdAt?: Date;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  country: string;
  state: string;
  cities: string;
  cep: number;
  district: string;
  street: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
}
