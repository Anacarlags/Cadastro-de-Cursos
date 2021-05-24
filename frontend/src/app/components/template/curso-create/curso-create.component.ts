import { CursoService } from './../../cursos/curso.service';
import { Curso } from './../../curso.model';
import { Component, OnInit, NgModule } from '@angular/core';
import * as moment from 'moment';


import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  curso : Curso ={
    name: '',
    duracao: null as any,
    inicio: '',
    termino: ''
  }

  constructor(private cursosService: CursoService, private adapter: DateAdapter<any> ) { }



  ngOnInit(): void {
    
  }
 
 
  createCurso(): void{
    let newDate: moment.Moment = moment.utc(this.curso.inicio).local();
    this.curso.inicio = newDate.format("DD-MM-YYYY")
    let newDateT: moment.Moment = moment.utc(this.curso.termino).local();
    this.curso.termino = newDateT.format("DD-MM-YYYY")
    this.cursosService.create(this.curso).subscribe(() => {
      this.cursosService.showMessage("Curso Cadastrado com Sucesso")
    })
   }

  cancel():void{
    
  }


}
