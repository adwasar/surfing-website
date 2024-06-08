export interface ProductType {
  id: number;
  name: string;
  date: string;
  price: number;
  favorite: boolean;
  subCategory: string | null;
  url: string[];
}

export interface StepProps {
  onLoadingChange: (value: boolean) => void;
}

export interface DataType {
  name: string;
  id: number;
}

export interface Area extends DataType {}

export interface Guest extends DataType {}
