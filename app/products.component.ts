import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Product } from './product' 
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'my-products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css'],
    //providers: [ProductService]
})
export class ProductsComponent implements OnInit {
    title = "Products";
    products: Product[];
    selectedProduct: Product;

    ngOnInit(): void {
        this.getProducts();
    }

    constructor(private router: Router,
        private productService: ProductService) { }

    getProducts(): void {
        //this.products = this.productService.getProducts();
        this.productService.getProductsSlowly().then(products => this.products = products);
    }
     
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name)
            .then(product => {
                this.products.push(product);
                this.selectedProduct = null;
            })
    }

    delete(product: Product): void {
        this.productService
            .delete(product.id)
            .then(() => {
                this.products = this.products.filter(p => p !== product);
                if (this.selectedProduct === product) {
                    this.selectedProduct = null;
                }
            });
    }
}


