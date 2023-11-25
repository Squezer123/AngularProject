import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from "./quiz-list/quiz-list.component";
import {QuizFormComponent} from "./quiz-form/quiz-form.component";

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: "full" },
  { path: 'quiz', component: QuizListComponent },
  { path: 'quiz-form', component: QuizFormComponent },
  { path: 'quiz-list', component: QuizListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
