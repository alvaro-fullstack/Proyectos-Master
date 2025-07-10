import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { User } from './auth/auth.user.entity';
import { Product } from './products/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Trabajo',
      database: 'Trabajo1',
      entities: [Product, User],
      synchronize: true, // Solo para desarrollo, no usar en producción
    }),
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}