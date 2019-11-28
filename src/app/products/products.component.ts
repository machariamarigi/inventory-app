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
  selectedProduct: IProduct;
  productOpen;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
  }

  trackById(index, item) {
    return item.id;
  }

  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product: IProduct) {
    this.delete = false;
    this.productOpen = true;
    this.selectedProduct = product;
  }

  onDelete(product: IProduct) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleFinish(event) {
    if (event && event.product) {
      if (this.selectedProduct) {
        this.productService.editProduct(this.selectedProduct.id, event.product);
      } else {
        this.productService.addProduct(event.product);
      }
    }

    this.productOpen = false;
  }

  handleCancel() {
    this.delete = false;
  }

  confirmDelete() {
    this.handleCancel();
    this.productService.removeProduct(this.productToBeDeleted);
  }
}
