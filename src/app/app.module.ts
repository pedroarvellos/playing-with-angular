import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { AttributeDirective } from './form/attribute.directive';

@NgModule({
  declarations: [AppComponent, FormComponent, ListComponent, AttributeDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
