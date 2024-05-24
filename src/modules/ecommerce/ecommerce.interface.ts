export type TTagsArray = {
  computer: string;
  peripherals: string;
  wireless: string;
  ergonomic: string;
};

export type TVariants = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TEcommerce = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: TTagsArray;
  variants: TVariants;
  inventory: TInventory;
};
