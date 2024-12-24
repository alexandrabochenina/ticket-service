import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";
import { CURRENCY_RUB, TCurrency } from "../../utils/currency";

export type TCurrencyValue = {
    currency: TCurrency,
    setCurrency: (currency: TCurrency) => void
}

export const CurrencyContext = createContext<TCurrencyValue>({
    currency: CURRENCY_RUB,
    setCurrency: () => null
});

export const useCurrency = () => {
    return useContext(CurrencyContext)
}

export const CurrencyContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [currency, setCurrency] = useState<TCurrency>(CURRENCY_RUB)
    const setCurrencyValue = useCallback((currency: TCurrency) => setCurrency(currency), [])

    return (
        <CurrencyContext.Provider value={{
            currency: currency,
            setCurrency: setCurrencyValue
        }}>
            {children}
        </CurrencyContext.Provider>
    )
}