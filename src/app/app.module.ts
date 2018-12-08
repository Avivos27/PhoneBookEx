import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PhonebookComponent } from "./components/phonebook/phonebook.component";
import { InputSearchComponent } from "./components/input-search/input-search.component";
import { ContactsTableComponent } from "./components/contacts-table/contacts-table.component";
import { CommentsService } from "./services/comments.service";

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    InputSearchComponent,
    ContactsTableComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
