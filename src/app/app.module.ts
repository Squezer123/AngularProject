import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizListElementComponent } from './quiz-list/quiz-list-element/quiz-list-element.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { QuizConductorComponent } from './quiz-conductor/quiz-conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizListElementComponent,
    QuizFormComponent,
    QuizConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
