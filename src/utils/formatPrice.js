export default function formatPrice(price) {
    const format = price.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'USD',
    })

    return format;
}
