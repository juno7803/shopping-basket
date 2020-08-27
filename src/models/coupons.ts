 // coupons.ts
export interface Icoupons{
    type : string;
    title: string;
    discountRate?: number;
    discountAmount?: number;
}

export const coupons = [
  {
    type: "rate",
    title: "10% 할인 쿠폰",
    discountRate: 10,
  },
  {
    type: "amount",
    title: "10,000원 할인 쿠폰",
    discountAmount: 10000,
  },
];