export type Feature = {
  name: string;
};

export interface SubcriptionItem {
  id: string;
  color: string;
  title: string;
  img: string;
  subtitle: string;
  price: string;
  monthly: boolean;
  features: Feature[];
}
