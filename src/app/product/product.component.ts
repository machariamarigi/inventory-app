import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'in-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  @Input() product;
  deviceType = 'tablet';

  deviceTypes = [
    {
      name: 'Tablet',
      icon: 'tablet'
    },
    {
      name: 'Laptop',
      icon: 'computer'
    },
    {
      name: 'Phone',
      icon: 'mobile'
    },
    {
      name: 'Moniter',
      icon: 'display'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      basic: fb.group({
        name: '',
        description: '',
        active: false,
        features: fb.array([
          fb.control('')
        ])
      }),
      expiration: fb.group({
        expirationDate: null,
      })
    });
  }


  ngOnInit() {
  }

  handleClose() {
    // TODO: to be implemented later
  }

  selectDevice(device) {
    this.deviceType = device.icon;
  }

  get basicFeatures(): FormArray {
    return this.productForm.get('basic.features') as FormArray;
  }

  addFeature() {
    this.basicFeatures.push(this.fb.control(''));
  }

}
