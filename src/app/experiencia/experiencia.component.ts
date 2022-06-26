import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  data = {
    lista:[
      {
        img: '../../assets/cultura.png',
        text: 'Diagnóstico organizacional de la Empresa Provincial de Cultura de La Habana,2011'
      },
      {
        img: '../../assets/aa.png',
        text: 'Talleres de orientación sobre adicciones. En Centro de Alcohólicos Anónimos en La Habana, Cuba. 2013'
      },
      {
        img: '../../assets/IMD.png',
        text: 'Psicoterapia a pacientes de internación domiciliaria. Empresa: IMD. La Plata, Argentina. 2013'
      },
      {
        img: '../../assets/Minterior.jpg',
        text: 'Ministerio del Interior. Buenos Aires, Argentina. 2014'
      },
      {
        img: '../../assets/sernameng.jpeg',
        text: `2021- 2022. Investigadora y autora de contenidos, en el proyecto: 
        "Licitación ID: 628-1-LE21 Elaboración, diseño e impresión de manual de relatoría
        de trabajo con mujeres Programa Mujer y Participación Política". Asesoría realizada
        por la empresa Epigrama Editora para el Servicio Nacional de la Mujer y la Equidad
        de Género de Chile.`
      },
      {
        img: '../../assets/gba-edu.jpeg',
        text: 'Ministerio de Educación Provincial. Dirección de Inspección General. 2022'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
