import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
}
