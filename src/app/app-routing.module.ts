import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddBookComponent} from './add-book/add-book.component';
import {BookListComponent} from './book-list/book-list.component';


const routes: Routes =[
    {path: "addBook" , component: AddBookComponent },
    {path: "bookList" , component: BookListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule{}
