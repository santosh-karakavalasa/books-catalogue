import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { BookManageService } from "../service/book-manage.service";
import { Book } from "../model/book.model";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit , OnDestroy {
  books: Book[];
  totalbooksCount: number;
  private booksSubscription: Subscription;
  constructor(private bookManageService: BookManageService) {}

  ngOnInit() {
    this.booksSubscription = this.bookManageService
      .getbooksUpdatedListener()
      .subscribe((books: { books: Book[]; totalbooksCount: number }) => {
        this.books = books.books;
        this.totalbooksCount = books.totalbooksCount;
      });
  }
  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
