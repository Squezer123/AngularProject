import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizListElementComponent } from './quiz-list/quiz-list-element/quiz-list-element.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuizConductorComponent } from './quiz-conductor/quiz-conductor.component';
import { CategoryDirective } from './directives/category.directive';
import { AnswerButtonComponent } from './quiz-conductor/answer-button/answer-button.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizListElementComponent,
    QuizFormComponent,
    QuizConductorComponent,
    CategoryDirective,
    AnswerButtonComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
