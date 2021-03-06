import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes, Router } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookService } from "./services/book.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { BookcategoryComponent } from "./components/bookcategory/bookcategory.component";
import { SearchComponent } from "./components/search/search.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { CartStatusComponent } from './components/cart-status/cart-status.component';

const routes: Routes = [
  { path: "books/:id", component: BookDetailsComponent },
  { path: "books", component: BookListComponent },

  { path: "search/:keyword", component: BookListComponent },
  { path: "category/:id", component: BookListComponent },
  { path: "", redirectTo: "/books", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookcategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    RouterModule.forRoot(routes),
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
