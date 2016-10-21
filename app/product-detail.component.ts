import { Component, Input } from '@angular/core';
import { Product } from './product'; 

@Component({
    selector: 'my-product-detail',
    templateUrl: './app/product-detail.component.html'
})
export class ProductDetailComponent {
    @Input()
    product: Product;
}