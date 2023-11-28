import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { startsWithUppercase } from '../validators/custom-validators';
import { Kategoria } from "../domain/kategoria.enum";
import { QuizService } from "../services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pytanie} from "../domain/pytanie.model";
import {Quiz} from "../domain/quiz.model";

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent {
  form: FormGroup;
  kategorie: string[];

  id: number

  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router, route: ActivatedRoute) {
    this.kategorie = Object.values(Kategoria);

    let nazwa='',kategoria='';

    this.id = +route.snapshot.params['id'];
    let quiz;
    if(!isNaN(this.id)) {
      quiz = this.quizService.findQuizById(this.id);

      nazwa = quiz.nazwa;
      kategoria = quiz.kategoria;
        //dataWygasniecia = this.quiz.dataWygasniecia.getFullYear();
    }

    this.form = this.fb.group({
      nazwa: new FormControl(nazwa, [Validators.required, Validators.minLength(3),
        Validators.maxLength(50),startsWithUppercase]),
      kategoria: new FormControl(kategoria, Validators.required),
      dataWygasniecia: new FormControl('', Validators.required),
      pytania: this.fb.array([], Validators.required)
    });

    if(!isNaN(this.id)) {
      for(let p of quiz.pytania) {
        this.addPytanie(p.tresc,p.odpowiedzi,p.poprawnaOdpowiedz);
      }
    }
  }

  get pytania() {
    return this.form?.get('pytania') as FormArray;
  }
  get nazwa() {
    return this.form.get('nazwa');
  }
  get kategoria() {
    return this.form.get('kategoria');
  }
  get dataWygasniecia() {
    return this.form.get('dataWygasniecia');
  }

  addPytanie(tresc='',odp = ['','','',''],nrPoprawnejOdp = 0) {
    const pytanieForm = this.fb.group({
      tresc: [tresc, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      odp1: [odp[0], [Validators.required, Validators.maxLength(30)]],
      odp2: [odp[1], [Validators.required, Validators.maxLength(30)]],
      odp3: [odp[2], [Validators.required, Validators.maxLength(30)]],
      odp4: [odp[3], [Validators.required, Validators.maxLength(30)]],
      nrPoprawnejOdp: [nrPoprawnejOdp+1, [Validators.required, Validators.min(1), Validators.max(4)]]
    });

    this.pytania.push(pytanieForm);
  }

  register() {
    if (this.form.valid) {
      const listaPytan: Pytanie[] = [];
      for(let element of this.form.value.pytania) {
        listaPytan.push(new Pytanie(element.tresc,[element.odp1,element.odp2,element.odp3,element.odp4],element.nrPoprawnejOdp-1));
      }

      const date = this.form.value.dataWygasniecia.split("-");
      let day = parseInt(date[2],10);
      const newDate = new Date(parseInt(date[0],10),parseInt(date[1],10)-1,
        day ,0, 0, 0, 0);
      console.log(newDate);

      if(isNaN(this.id)) {
        this.quizService.addQuiz(this.form.value.nazwa,this.form.value.kategoria, newDate,listaPytan);
      }
      else {
        this.quizService.editQuiz(this.id,this.form.value.nazwa,this.form.value.kategoria, newDate,listaPytan);
      }

      this.router.navigate([`/quiz-list`]);
    }
  }
  return() {
    this.router.navigate([`/quiz-list`]);
  }
  removePytanie(index) {
    this.pytania.removeAt(index);
  }
}
