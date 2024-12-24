import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

export type TContextValue = {
    quantityTransfer: number[],
    setQuantityTransfer: (quantity: number[]) => void
}

export const TransferContext = createContext<TContextValue>({
    quantityTransfer: [],
    setQuantityTransfer: () => null
});

export const useTransfer = () => {
    return useContext(TransferContext)
}

export const TransferContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [transferQuantity, setTransferQuantity] = useState<number[]>([])
    const setTransferQuantityCallback = useCallback((quantity: number[]) => setTransferQuantity(quantity), [])

    return (
        <TransferContext.Provider value={{
            quantityTransfer: transferQuantity,
            setQuantityTransfer: setTransferQuantityCallback
        }}>
            {children}
        </TransferContext.Provider>
    )
}