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
  delete = false;
  productToBeDeleted: IProduct;

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
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel() {
    this.delete = false;
  }

  confirmDelete() {
    this.handleCancel();
    this.productService.removeProduct(this.productToBeDeleted);
  }
}
