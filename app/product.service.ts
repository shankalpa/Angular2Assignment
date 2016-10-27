import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {Configuration} from './app.constants';
import { Product } from './product';
//import { PRODUCTS } from './mock-products';


@Injectable()
export class ProductService {
    //getProducts(): Product[] {
    //    return PRODUCTS;
    //}

    private productUrl = 'app/products';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {

    }

    getProducts(): Promise<Product[]> {
        //return Promise.resolve(PRODUCTS);
        return this.http.get(this.productUrl)
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts().
            then(products => products.find(product => product.id == id));
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise<Product[]>(resolve =>
            setTimeout(resolve, 2000))
                .then(() => this.getProducts());
    }

    private handleError(error: any): Promise<any> {
        console.error('An errro occurred', error);
        return Promise.reject(error.message || error);
    }

    update(product: Product): Promise<Product> {
        const url = `${this.productUrl}/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    create(name: string): Promise<Product> {
        return this.http
            .post(this.productUrl, JSON.stringify({name: name}), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.productUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}