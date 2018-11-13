import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {BookManageService} from '../service/book-manage.service';
import {Book} from '../model/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  categories: string[] = ['drama', 'comedy', 'sport' ];

  constructor(private bookManageService: BookManageService) { }

  ngOnInit() {
    this.addBookForm = new FormGroup({
      title: new FormControl(null , { validators:  [Validators.required , Validators.maxLength(30)]}),
      category: new FormControl(null , [Validators.required]),
      description:  new FormControl(null , [Validators.required])
   });
  }

  onAddBook() {

    if (!this.addBookForm.valid) {
      return;
    }
    console.log(this.addBookForm);
    const book: Book = {
        title: this.addBookForm.value.title ,
        category: this.addBookForm.value.category,
        description: this.addBookForm.value.description};
     this.bookManageService.addBook(book);

     this.addBookForm.reset();
     Object.keys(this.addBookForm.controls).forEach(key => {
      this.addBookForm.controls[key].setErrors(null);
    });
  }
}
