import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './product' 
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [ProductService]
})
export class AppComponent implements OnInit {
    title = "Products";
    products: Product[];
    selectedProduct: Product;

    ngOnInit(): void {
        this.getProducts();
    }

    constructor(private productService: ProductService) { }

    getProducts(): void {
        //this.products = this.productService.getProducts();
        this.productService.getProducts().then(products => this.products = products);
    }
     
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}


