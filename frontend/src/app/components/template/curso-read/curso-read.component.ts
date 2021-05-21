import { Curso } from './../../curso.model';
import { CursoService } from './../../cursos/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-read',
  templateUrl: './curso-read.component.html',
  styleUrls: ['./curso-read.component.css']
})
export class CursoReadComponent implements OnInit {

  curso: Curso[] = [];
  displayedColumns = ['id', 'name', 'Inicio', 'Termino', 'Duracao']



  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.read().subscribe(curso => {
      this.curso = curso
   })
  }

}
