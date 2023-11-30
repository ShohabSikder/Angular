import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
 private products: Product[] = [
 new Product(1, "Iphone", "Mobile", "Iphone (Mobile)", 100),
 new Product(2, "Samsung", "Mobile", "Samsung (Mobile)", 100),
 new Product(3, "Nothing", "Mobile", "Nothing (Mobile)", 100),
 new Product(4, "OnePlus", "Mobile", "OnePlus (Mobile)", 100),
 new Product(5, "Xioami", "Mobile", "Xioami (Mobile)", 100),
 new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
 new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
 new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
 new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
 new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
 new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
 new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
 new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
 new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
 new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
 ];
 getProducts(): Observable<Product[]> {
 return from([this.products]);
 }
 saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
    }
}