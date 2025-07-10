import { Component, Input } from '@angular/core';
import { Iproduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Iproduct[] = [];
  texto: string = ""

  ngOnChanges() {
    this.texto = "";
    this.products.forEach(product => {
      this.texto += `<li class="product">${product.title} - ${product.price}€ -  ${product.quantity} productos</li>`
    })
  }
}