type TStorage =
  | "2GB"
  | "4GB"
  | "6GB"
  | "8GB"
  | "12GB"
  | "16GB"
  | "32GB"
  | "64GB"
  | "128GB"
  | "256GB"
  | "512GB"
  | "1TB";

export interface IProduct {
  name: string;
  price: number;
  quantity: number;
  releaseDate: string;
  brand: string;
  model: string;
  operatingSystem: "iOS" | "Android";
  storage: {
    ROM: TStorage;
    RAM: TStorage;
  };
  screenSize: string;
  battery: string;
  camera: {
    front: string;
    back: string;
  };
  processor: {
    type: string;
    speed: string;
  };
  rating: number;
  colors?: string[];
  chargingType: string;
  weight: string;
  details: string;
  discount: boolean;
  productImage: string;
}
