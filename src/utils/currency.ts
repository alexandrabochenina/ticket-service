export type TCurrency = {
    name: string,
    symbol: string,
    convertFromRub: (value: number) => number
}

export const CURRENCY_RUB: TCurrency = {
    name: 'RUB',
    symbol: '₽',
    convertFromRub: (value) => value
}

export const CURRENCY_USD: TCurrency = { 
    name: 'USD',
    symbol: '$',
    convertFromRub: (value) => Math.floor(value / 98)
}

export const CURRENCY_EUR: TCurrency = { 
    name: 'EUR',
    symbol: '€',
    convertFromRub: (value) => Math.floor(value / 108)
}

