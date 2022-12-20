import * as React from 'react';
import { Product } from '../../../domain/models/Product';
import { productService } from '../../../domain/services/Product.service';
import { Button } from '../atoms/Button/Button';
import styles from './ProductList.module.css';

type ProductListProps = {
    onSelectProduct: (product: Product) => void;
};

export const ProductList: React.FC<ProductListProps> = ({
    onSelectProduct
}) => {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        productService.getProducts().then(setProducts);
    }, []);

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id} className={styles.product}>
                    <Button
                        onClick={() => {
                            onSelectProduct(product);
                        }}
                        label={product.title}
                        primary
                    />
                </li>
            ))}
        </ul>
    );
};
