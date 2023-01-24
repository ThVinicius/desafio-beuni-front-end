export default function formatPrice(price: number) {
  const parse = price.toFixed(2)

  return parse.replace('.', ',')
}
