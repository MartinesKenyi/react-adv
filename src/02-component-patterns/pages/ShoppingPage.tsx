import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/index';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppintCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart} = useShoppingCart()

    return (
        <div>
            <h1> Shopping store </h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle
                                className='text-white'
                            />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>
            <div className='shopping-card'>

                {
                    Object.entries(shoppingCart).map(([key, productCart]) => (
                        <ProductCard
                            key={key}
                            product={productCart}
                            className='bg-dark text-white'
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={productCart.count}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }

            </div>
            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}
