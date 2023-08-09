import { Component } from '@angular/core';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

// import tree
// começo da tree
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  icon?: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Arquitetura e Urbanismo & Design',
    icon: "../../../../assets/Icons/icone_arquitetura.svg",
    children: [
      { name: 'Arquitetura' },
      { name: 'Design de Interiores' },
      { name: 'Design Gráfico' }
    ],
  },
  {
    name: 'Ciências Agrárias & Meio Ambiente',
    icon: "../../../../assets/Icons/icone_agro.svg",
    children: [
      { name: 'Agronomia' },
      { name: 'Gestão Ambiental' },
      { name: 'Engenharia Florestal' }
    ],
  },
  {
    name: 'Ciências Biológicas e da Saúde',
    icon: "../../../../assets/Icons/icone_saude.svg",
    children: [
      { name: 'Biomedicina' },
      { name: 'Medicina' },
      { name: 'Enfermagem' }
    ],
  },
  {
    name: 'Ciências Humanas',
    icon: "../../../../assets/Icons/icone_educacao.svg",
    children: [
      { name: 'História' },
      { name: 'Psicologia' },
      { name: 'Sociologia' }
    ],
  },
  {
    name: 'Ciências Jurídicas',
    icon: "../../../../assets/Icons/icone_direito.svg",
    children: [
      { name: 'Direito' },
      { name: 'Ciências Criminais' },
      { name: 'Relações Internacionais' }
    ],
  },
  {
    name: 'Ciências Médicas',
    icon: "../../../../assets/Icons/icone_saude.svg",
    children: [
      { name: 'Medicina' },
      { name: 'Odontologia' },
      { name: 'Fisioterapia' }
    ],
  },
  {
    name: 'Comunicação & Artes',
    icon: "../../../../assets/Icons/icone_artes.svg",
    children: [
      { name: 'Jornalismo' },
      { name: 'Publicidade' },
      { name: 'Cinema' }
    ],
  },
  {
    name: 'Engenharias',
    icon: "../../../../assets/Icons/icone_engenharia.svg",
    children: [
      { name: 'Engenharia Civil' },
      { name: 'Engenharia Elétrica' },
      { name: 'Engenharia de Software' }
    ],
  },
  {
    name: 'Gestão & Negócios',
    icon: "../../../../assets/Icons/icone_artes.svg",
    children: [
      { name: 'Administração' },
      { name: 'Gestão de Recursos Humanos' },
      { name: 'Marketing' }
    ],
  },
  {
    name: "T.I. & Computação",
    icon: "../../../../assets/Icons/icone_tecnologia.svg",
    children: [
      { name: "Ciência da Computação" },
      { name: "Engenharia de Software" },
      { name: "Sistemas de Informação" }
    ]
  },
  {
    name: "Turismo & Hospitalidade",
    icon: "../../../../assets/Icons/icone_turismo.svg",
    children: [
      { name: "Gestão em Turismo" },
      { name: "Hotelaria" },
      { name: "Eventos" }
    ]
  }
];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})

export class CursosComponent {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  )

  dataSource = new MatTreeFlatDataSource(
    this.treeControl, this.treeFlattener
  )

  // O problema esta aqui dois contrutores, não entendi como arrumar isso
  // constructor() {
  //   this.dataSource.data = TREE_DATA
  // }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  // daqui para baixo, ja é outro codigo, para mostrar as informações da pagina

  ies: any
  campusIndex!: number

   constructor(

     private iesService: IesSelecionadaService,
     private campusService: CampusSelecionadoService,
   ) { }

  ngOnInit() {
    this.dataSource.data = TREE_DATA;
    this.campusIndex = this.campusService.getCampusSelecionado()
    this.ies = this.iesService.getIesSelecionada()

    console.log(this.ies.iesEnviar.instituicoes[this.campusIndex].nome)
    console.log(this.ies)
    console.log(this.campusIndex)
  }
}


