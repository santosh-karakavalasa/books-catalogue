
import { Injectable } from "@angular/core";
import {Book} from '../model/book.model';
import { BehaviorSubject , Observable } from "rxjs";

@Injectable()
export class BookManageService {
 private books: Book[] = [];
 private totalbooksCount = 0;
 private booksUpdated = new BehaviorSubject<{ books: Book[], totalbooksCount: number }>( {books: [] , totalbooksCount: 0 });


 addBook( book: Book) {
  this.totalbooksCount += 1;
  this.books.push(book);
  this.booksUpdated.next({ books: [...this.books], totalbooksCount: this.totalbooksCount });

 }

 getbooksUpdatedListener(): Observable<{ books: Book[], totalbooksCount: number }> {
  return this.booksUpdated.asObservable();
}
}
