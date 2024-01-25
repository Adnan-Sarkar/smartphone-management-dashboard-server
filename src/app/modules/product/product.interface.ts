export interface IProduct {
  name: string;
  price: number;
  quantity: number;
  releaseDate: string;
  brand: string;
  model: string;
  operatingSystem: "iOS" | "Android";
  storage:
    | "2GB"
    | "4GB"
    | "8GB"
    | "16GB"
    | "32GB"
    | "64GB"
    | "128GB"
    | "256GB"
    | "1TB";
  screenSize: string;
  battery: string;
  frontCamera: string;
  backCamera: string;
  processor: string;
  ram: "2GB" | "4GB" | "8GB" | "16GB" | "32GB" | "64GB" | "128GB" | "256GB";
  rating: number;
  colors: string[];
  chargingType: string;
  weight: string;
  details: string;
  discount: boolean;
  productImage: string;
}
