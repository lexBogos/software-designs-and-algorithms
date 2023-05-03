class DiscountService {
  getDiscount(price: number, discountType: string) {
    if (discountType === 'percentage') {
      return price * 0.1;
    } else if (discountType === 'fixed') {
      return 5;
    }
  }
}