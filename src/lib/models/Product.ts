import { Color } from "./Color";

export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  color: Color;
  images: string[];

  constructor(id: string, name: string, description: string, price: number, discount: number, color: Color) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
  }
}