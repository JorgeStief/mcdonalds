'use client'
import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Pick<Product,  "id" | "name" | "price"> {
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

    const addProduct = (product: CartProduct) => {
        const productIsAlreadyOnTheCart = products.some(
          (prevProduct) => prevProduct.id === product.id,
        );
        if (!productIsAlreadyOnTheCart) {
          return setProducts((prev) => [...prev, product]);
        }
        setProducts((prevProducts) => {
          return prevProducts.map((prevProduct) => {
            if (prevProduct.id === product.id) {
              return {
                ...prevProduct,
                quantity: prevProduct.quantity + product.quantity,
              };
            }
            return prevProduct;
          });
        });
    };

    return (
        <CartContext.Provider value={{ isOpen, products, toogleCart, addProduct }}>
            {children}
        </CartContext.Provider>
    );
}