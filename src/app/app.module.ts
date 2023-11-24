import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizListElementComponent } from './quiz-list/quiz-list-element/quiz-list-element.component';
import { QuizConductorComponent } from './quiz-conductor/quiz-conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizListElementComponent,
    QuizConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
