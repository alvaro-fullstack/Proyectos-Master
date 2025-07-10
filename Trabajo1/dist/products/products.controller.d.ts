import { ProductsService } from './products.service';
import { Product } from './product.entity';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
}
