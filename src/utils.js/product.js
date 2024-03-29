export function calculatePriceDetails(priceDetails) {
  console.log('======= Price Details', priceDetails);
  const basePrice = parseInt(priceDetails.value, 10);
  const finalPrice = parseInt(
    (basePrice * (100 - priceDetails.discount)) / 100,
    10
  );
  return {
    basePrice,
    finalPrice,
    isDiscounted: finalPrice !== basePrice,
  };
}
