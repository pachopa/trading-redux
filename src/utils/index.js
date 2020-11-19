export default function generateRandomDecimal() {
  const min = 0.01,
    max = 0.99,
    randomNumber = (Math.random() * (max - min) + min).toFixed(2);

  console.log("randomNumber:", randomNumber);

  return randomNumber;
}
