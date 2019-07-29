import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WellComponent } from "./well/well.component";
import { WellListComponent } from "./well-list/well-list.component";

//Prime-ng Modules
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [AppComponent, WellComponent, WellListComponent],
  imports: [BrowserModule, AppRoutingModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
