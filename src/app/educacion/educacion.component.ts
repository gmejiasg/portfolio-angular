import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  data=[
    {
      nombre: "grado",
      items: [
        `universitario: Licenciada en Psicología, otorgado por la Facultad de 
        Psicología,Universidad de La Habana (UH). 2013.`
      ]
    },
    {
      nombre: "seminarios",
      items: [
        `Género, TransGénero, y PostGénero en las Políticas del Cuerpo y
        las Disidencias en las Américas Latinas. Coordina: Pedro Di Pietro. FLACSO,
        Argentina.`, 
        `Infancias y Género: Género, Transgénero, y Postgénero en las
        Políticas de Cuerpo y las Disidencas en las Américas Latinas. Coordinadora:
        Valeria Llobet. FLACSO, Argentina.`,
        `Planificación para la igualdad entre los géneros: Enfoque
        estratétigico y perspectiva de género. Coordinadora: María del Carmen
        Tamargo. FLACSO, Argentina`,
        `Análisis comparado de legislación, políticas públicas e instituciones orientadas hacia el logro de la equidad de género. Coordinadora:
        Virginia Guzmán. FLACSO, Argentina.`,
        `Programación estratégica, análisis prospectivo y tecnologías para el cambio organizacional. La gestión y la evaluación de políticas de equidad
        de género. Coordinadora: María del Carmen Tamargo. FLACSO, Argentina`,
        `Globalización y género: dimensiones económicas, políticas, culturales y sociales. tensiones, reacciones y propuestas emergentes en
        américa latina. Coordinadora: Gloria Bonder. FLACSO, Argentina.`,
      ]
    },
    {
      nombre: "postgrado",
      items: [
        `
        Maestría Género, política y sociedad, por la Fundación Latinoamericana 
        de Ciencias Sociales (FLACSO). En Programa Regional de formación en 
        Género y Políticas Públicas. Acreditada por la CONEAU 
        (Comisión Nacional de Evaluación y Acreditación Universitaria del
        Ministerio de Educación, Argentina) Resolusión 2017-323
        `
      ]
    },
    {
      nombre: "talleres",
      items: [
        ` La Escritura de Papers. Nociones, Herramientas y Claves para su Participación en Publicaciones Académicas. Coordinación Autoctonía. Revista de Ciencias Sociales e Historia. Dirección de Investigación y Doctorados.
        Universidad Bernardo O'Higgins. Santiago de Chile.`,
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
