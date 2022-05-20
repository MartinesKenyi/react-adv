import { useState } from 'react';
import { onChangeArgs, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: onChangeArgs) => {
        setShoppingCart(oldShoppingCart => {
           
            if (count === 0) {
                // * mi lógica *
                // delete oldShoppingCart[product.id]
                // return { ...oldShoppingCart }

                // * Lógica del profe *
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        onProductCountChange,
        shoppingCart
    }

}