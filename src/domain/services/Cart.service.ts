import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

const hasProduct = (cart: Cart, product: Product) =>
    cart.items.find((item) => item.id === product.id);

const createCart = (product: Product) => ({
    id: Math.random().toString(),
    items: [product]
});

const increaseCart = (cart: Cart, product: Product) => ({
    ...cart,
    items: [...cart.items, product]
});

const addProductToCart = (product: Product, cart?: Cart | null): Cart =>
    cart
        ? hasProduct(cart, product)
            ? cart
            : increaseCart(cart, product)
        : createCart(product);

export const cartService = {
    addProductToCart
};
