import { Component } from '@angular/core';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';
import { Router } from '@angular/router';
// import tree
// começo da tree
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  id: number;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  id: number
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Arquitetura e Urbanismo & Design',
    id: 0,
    children: [
      { name: 'Arquitetura', id: 0 },
      { name: 'Design de Interiores', id: 1 },
      { name: 'Design Gráfico', id: 2 }
    ]
  },
  {
    name: 'Ciências Agrárias & Meio Ambiente',
    id: 1,
    children: [
      { name: 'Agronomia', id: 0 },
      { name: 'Gestão Ambiental', id: 1 },
      { name: 'Engenharia Florestal', id: 2 }
    ]
  },
  {
    name: 'Ciências Biológicas e da Saúde',
    id: 2,
    children: [
      { name: 'Biomedicina', id: 0 },
      { name: 'Medicina', id: 1 },
      { name: 'Enfermagem', id: 2 }
    ]
  },
  {
    name: 'Ciências Humanas',
    id: 3,
    children: [
      { name: 'História', id: 0 },
      { name: 'Psicologia', id: 1 },
      { name: 'Sociologia', id: 2 }
    ]
  },
  {
    name: 'Ciências Jurídicas',
    id: 4,
    children: [
      { name: 'Direito', id: 0 },
      { name: 'Ciências Criminais', id: 1 },
      { name: 'Relações Internacionais', id: 2 }
    ]
  },
  {
    name: 'Ciências Médicas',
    id: 5,
    children: [
      { name: 'Medicina', id: 0 },
      { name: 'Odontologia', id: 1 },
      { name: 'Fisioterapia', id: 2 }
    ]
  },
  {
    name: 'Comunicação & Artes',
    id: 6,
    children: [
      { name: 'Jornalismo', id: 0 },
      { name: 'Publicidade', id: 1 },
      { name: 'Cinema', id: 2 }
    ]
  },
  {
    name: 'Engenharias',
    id: 7,
    children: [
      { name: 'Engenharia Civil', id: 0 },
      { name: 'Engenharia Elétrica', id: 1 },
      { name: 'Engenharia de Software', id: 2 }
    ]
  },
  {
    name: 'Gestão & Negócios',
    id: 8,
    children: [
      { name: 'Administração', id: 0 },
      { name: 'Gestão de Recursos Humanos', id: 1 },
      { name: 'Marketing', id: 2 }
    ]
  },
  {
    name: 'T.I. & Computação',
    id: 9,
    children: [
      { name: 'Ciência da Computação', id: 0 },
      { name: 'Engenharia de Software', id: 1 },
      { name: 'Sistemas de Informação', id: 2 }
    ]
  },
  {
    name: 'Turismo & Hospitalidade',
    id: 10,
    children: [
      { name: 'Gestão em Turismo', id: 0 },
      { name: 'Hotelaria', id: 1 },
      { name: 'Eventos', id: 2 }
    ]
  }
];

const icons = [
  {
    icon: "../../../../assets/Icons/icone_arquitetura.svg"
  },
  {
    // acho q esse icon agro na vdd é icon de erro
    // icon: "../../../../assets/Icons/icone_agro.svg"
    icon: "../../../../assets/Icons/icone_arquitetura.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_saude.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_educacao.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_direito.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_saude.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_artes.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_engenharia.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_artes.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_tecnologia.svg"
  },
  {
    icon: "../../../../assets/Icons/icone_turismo.svg",
  },
]

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
      id: node.id,
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

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  //tree end

  ies: any
  index!: any
  nodeId!: number

  icon:any = icons

  constructor(
    private iesService: IesSelecionadaService,
    private campusService: CampusSelecionadoService,
    private cursoService: CursoSelecionadoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.data = TREE_DATA;
    this.index = this.campusService.getCampusSelecionado()
    this.ies = this.iesService.getIesSelecionada()

    console.log('Cursos disponiveis no campus ' + this.ies.instituicoes[this.index].nome)
    console.log(this.dataSource.data)
  }

  clickH2(node: any) {
    console.log('Id da area de cursos selecionado = ' + node.id)
    this.nodeId = node.id
  }

  click(cursoId: any, nodeName: string) {
    console.log('Id do curso selecionado = ' + cursoId)
    console.log('Curso Selecionado = ' + nodeName)
    this.router.navigate([`instituicoes/${this.ies.nome}/${this.ies.instituicoes[this.index].nome.toLowerCase()}/${this.dataSource.data[this.nodeId].children![cursoId].name.toLowerCase()}`])
    this.cursoService.setCursoSelecionado(this.dataSource.data[this.nodeId].children![cursoId])

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}


