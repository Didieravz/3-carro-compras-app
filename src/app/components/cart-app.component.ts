import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarroComponent } from './carro/carro.component';
import { CarroItem } from '../model/carroItem';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogoComponent, CarroComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];

  items: CarroItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  //Metodo para agregar un producto al carro de compras
  onAddCar(producto: Product) {
    //Valida si el producto ya fue agregado
    const hasProduct = this.items.find(
      (item) => item.product.id === producto.id
    );
    //Si fue agregado cambia la cantidad
    if (hasProduct) {
      this.items = this.items.map((item) => {
        if (item.product.id === producto.id) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
          };
        }
        return item;
      });
    } else {
      this.items = [...this.items, { product: { ...producto }, cantidad: 1 }];
    }
  }
}
