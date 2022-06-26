import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  
  data = {
    descripcion: 'Actualmente trabajando en Ministerio de Educacion Provincial. Experiencia en trabajos de psicolologia organizacional. Marketing inmobiliario.',
    interes: 'metodologías ágiles de desarrollo, relevamiento y análisis funcional',
    perfil:'scrum master, proyect mananger'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
