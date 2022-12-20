import React from 'react';
import { ProductList } from './ProductList';
import { Cart } from '../../domain/models/Cart';
import { Product } from '../../domain/models/Product';
import { cartService } from '../../domain/services/Cart.service';

type AppProps = {
    msg: string;
};

const App: React.FC<AppProps> = ({ msg }) => {
    const [cart, setCart] = React.useState<Cart | null>(null);

    const handleAddToCart = (product: Product) => {
        setCart(cartService.addProductToCart(product, cart));
    };

    return (
        <div className='App'>
            <h1>{msg}</h1>
            <ProductList onSelectProduct={handleAddToCart} />
            {cart && <p>Items on cart: {cart.items.length}</p>}
        </div>
    );
};

export default App;
