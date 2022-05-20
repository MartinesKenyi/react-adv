import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const useProduct = ( {onChange, product, value = 0 }: useProductArgs ) => {
    const [counter, setCounter] = useState(value);

    const isControl = useRef(!!onChange) // sin esto tambien funcionaria quitando el comentario de la fn onProductCountChange

    const increaseBy = (value: number) => {
        
        if (isControl.current) {
            return onChange!({count: value, product})
        }

        const newValue = Math.max(counter + value, 0);
        
        // setCounter(prev => Math.max(prev + value, 0)); esto tambien funciona igual.
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    // para el efecto del value desde la tarjeta principal a los pequeños.
    useEffect(() => {
        setCounter(value);
    }, [value])
    
    return { counter, increaseBy }
}