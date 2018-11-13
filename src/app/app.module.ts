import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import {BookManageService} from '../app/service/book-manage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [BookManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
