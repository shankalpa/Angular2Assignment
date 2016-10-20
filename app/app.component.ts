import { Component } from '@angular/core';
export class Product {
    id: number;
    name: string;
}
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title = "Products";
    products = PRODUCTS;
    selectedProduct: Product;
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

}

const PRODUCTS: Product[] = [
    { id: 11, name: 'Milk' },
    { id: 12, name: 'Bread' },
    { id: 13, name: 'Cereal' },
    { id: 14, name: 'Jam' },
    { id: 15, name: 'Butter' },
    { id: 16, name: 'Oatmeal' },
    { id: 17, name: 'Eggs' },
    { id: 18, name: 'Applie' },
    { id: 19, name: 'Orange' },
    { id: 20, name: 'Bacon' }
];

