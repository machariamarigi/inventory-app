import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService, IProduct } from '../product.service';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]> = this.productService.products$;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
  }

  trackById(index, item) {
    return item.id;
  }

  addProduct() {
    // TODO: Implement adding a product
  }

  onEdit(product: IProduct) {
    // TODO: Implement editing a product
  }

  onDelete(product: IProduct) {
    // TODO: Implement deleting a product
  }
}
