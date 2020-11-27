export default function generateRandomDecimal(totalStockNumber) {
  const min = 0.01,
    max = 0.99;
  let allRandomNumber = [];

  for (let i = 0; i < totalStockNumber; i++) {
    let randomNumber = (Math.random() * (max - min) + min).toFixed(2);
    allRandomNumber.push(randomNumber);
  }

  return allRandomNumber;
}
