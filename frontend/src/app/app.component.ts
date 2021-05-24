import { Curso } from './components/curso.model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { CursoService} from './components/cursos/curso.service'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
   
})
export class AppComponent implements OnInit{
 


  constructor(){}

  ngOnInit() { }

  
}
