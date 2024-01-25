export interface IProduct {
  name: string;
  price: number;
  quantity: number;
  releaseDate: string;
  brand: string;
  model: string;
  operatingSystem: "iOS" | "Android";
  storage: string;
  screenSize: string;
  battery: string;
  frontCamera: string;
  backCamera: string;
  processor: string;
  ram: 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256;
  rating: number;
  colors: string[];
  chargingType: string;
  weight: string;
  details: string;
  discount: boolean;
}
