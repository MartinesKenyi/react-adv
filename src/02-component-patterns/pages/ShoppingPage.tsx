import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/index';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1> Shopping store </h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title />
                    <ProductCard.Buttons  />
                </ProductCard>

                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image'/>
                    <ProductTitle 
                        title='new ...' 
                        className='text-white'
                    />
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        background: '#fcfcfc'
                    }}
                >
                    <ProductImage 
                        style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}
                    />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    )
}
