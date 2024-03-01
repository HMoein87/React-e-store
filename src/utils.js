export const formatNumber = number => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD' }).format(number);
}