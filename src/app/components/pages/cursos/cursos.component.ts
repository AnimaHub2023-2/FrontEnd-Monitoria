import { Component } from '@angular/core';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

// import tree
// começo da tree
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
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
  //   this.dataSource.data = TREE_DATA;
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

    this.campusIndex = this.campusService.getCampusSelecionado()
    this.ies = this.iesService.getIesSelecionada()

    console.log(this.ies.iesEnviar.instituicoes[this.campusIndex].nome)
    console.log(this.ies)
    console.log(this.campusIndex)
  }
}


