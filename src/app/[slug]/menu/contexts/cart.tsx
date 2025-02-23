'use client'
import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Product {
    quantity: number;
}

export interface ICartContext {
    isOpen: boolean;
    products: CartProduct[];
    addProduct: (product: CartProduct) => void;
    toogleCart: () => void;
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    products: [],
    addProduct: () => {},
    toogleCart: () => {},
});

export const CartProvider = ({ children }: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const toogleCart = () => {
        setIsOpen(!isOpen);
    };

    const addProduct = async (product: CartProduct) => {
        const productIndex = products.findIndex((p) => p.id === product.id);

        if (productIndex !== -1) {
            const newProducts = [...products];
            newProducts[productIndex].quantity += 1;
            setProducts(newProducts);
        } else {
            setProducts([...products, { ...product, quantity: 1 }]);
        }
    }

    return (
        <CartContext.Provider value={{ isOpen, products, toogleCart, addProduct }}>
            {children}
        </CartContext.Provider>
    );
}