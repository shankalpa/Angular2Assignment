import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import './rxjs-extensions';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router'
import { DashBoardComponent } from './dashboard.component';
import { ProductSearchComponent } from './product-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        ProductDetailComponent,
        ProductsComponent,
        DashBoardComponent,
        ProductSearchComponent
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }

