import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralDirective } from './directives/structural.directive';
// import { ArrayDirective } from './directives/array.directive';
import { BoxDirective } from './directives/box.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    StructuralDirective,
    // ArrayDirective,
    BoxDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
