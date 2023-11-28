import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from "./quiz-list/quiz-list.component";
import { QuizFormComponent } from "./quiz-form/quiz-form.component";
import { QuizConductorComponent } from "./quiz-conductor/quiz-conductor.component";

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: "full" },
  { path: 'quiz', component: QuizListComponent },
  { path: 'quiz-form', component: QuizFormComponent },
  { path: 'quiz-list', component: QuizListComponent },
  { path: 'quiz', component: QuizListComponent },
  { path: 'quiz/:id/conduct', component: QuizConductorComponent },
  { path: 'quiz/:id/edit', component: QuizFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
