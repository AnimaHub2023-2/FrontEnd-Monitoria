import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent {

  iesList:Array<any> = [
    {
      id: 0,
      nome: 'AGES',
      descricao: 'Centro Universitário',
      logo: '../../../../assets/IES/AGES/logoAGES.png',
      instituicoes: [
        {
          nome: 'irece',
          imagem: '../../../../assets/IES/AGES/irece/AGES-irece.jpg'
        },
        {
          nome: 'jacobina',
          imagem: '../../../../assets/IES/AGES/jacobina/AGES-jacobina.jpg'
        },
        {
          nome: 'paripiranga',
          imagem: '../../../../assets/IES/AGES/paripiranga/AGES-paripiranga.jpg'
        },
        {
          nome: 'senhor-do-bonfim',
          imagem: '../../../../assets/IES/AGES/senhor-do-bonfim/AGES-senhor-do-bonfim.jpg'
        },
        {
          nome: 'tucano',
          imagem: '../../../../assets/IES/AGES/tucano/AGES-tucano.jpg'
        }
      ]
    },
    {
      id: 1,
      nome: 'FADERGS',
      descricao: 'Faculdade de Desenvolvimento do Rio Grande do Sul',
      logo: '../../../../assets/IES/FADERGS/logoFADERGS.png',
      instituicoes: [
        {
          nome:'centro',
          imagem: '../../../../assets/IES/FADERGS/centro/FADERGS-centro.jpg'
        }
      ]
    },
    {
      id: 2,
      nome: 'FASEH',
      descricao: 'Faculdade da Saúde e Ecologia Humana',
      logo: '../../../../assets/IES/FASEH/logoFASEH.png',
      instituicoes: [
        {
          nome: 'vespasiano',
          imagem: '../../../../assets/IES/FASEH/vespasiano/FASEH-vespasiano.jpg'
        }
      ]
    },
    {
      id: 3,
      nome: 'FPB',
      descricao: 'Faculdade Internacional da Paraíba',
      logo: '../../../../assets/IES/FPB/logoFPB.png',
      instituicoes: [
        {
          nome: 'tambia',
          imagem: '../../../../assets/IES/FPB/tambia/FPB-tambia.jpg'
        }
      ]
    },
    {
      id: 4,
      nome: 'IBMR',
      descricao: 'Instituto Brasileiro de Medicina de Reabilitação',
      logo: '../../../../assets/IES/IBMR/logoIBMR.png',
      instituicoes: [
        {
          nome: 'barra',
          imagem: '../../../../assets/IES/IBMR/barra/IBMR-barra.jpg'
        },
        {
          nome: 'botafogo',
          imagem: '../../../../assets/IES/IBMR/botafogo/IBMR-botafogo.jpg'
        },
        {
          nome: 'catete',
          imagem: '../../../../assets/IES/IBMR/catete/IBMR-catete.jpg'
        }
      ]
    },
    {
      id: 5,
      nome: 'UAM',
      descricao: 'Universidade Anhembi Morumbi',
      logo: '../../../../assets/IES/UAM/logoUAM.png',
      instituicoes: [
        {
          nome: 'mooca',
          imagem: '../../../../assets/IES/UAM/mooca/UAM-mooca.jpg'
        },
        {
          nome: 'paulista',
          imagem: '../../../../assets/IES/UAM/paulista/UAM-paulista.jpg'
        },
        {
          nome: 'piracicaba',
          imagem: '../../../../assets/IES/UAM/piracicaba/UAM-piracicaba.jpg'
        },
        {
          nome: 'sao jose dos campos',
          imagem: '../../../../assets/IES/UAM/sao-jose-dos-campos/UAM-sao-jose-dos-campos.jpg'
        },
        {
          nome: 'vila olimpia',
          imagem: '../../../../assets/IES/UAM/vila-olimpia/UAM-vila-olimpia.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 6,
      nome: 'UNA',
      descricao: 'Centro Universitário',
      logo: '../../../../assets/IES/UNA/logoUNA.png',
      instituicoes: [
        {
          nome: 'aimores',
          imagem: '../../../../assets/IES/UNA/aimores/UNA-aimores.jpg'
        },
        {
          nome: 'barreiro',
          imagem: '../../../../assets/IES/UNA/barreiro/UNA-barreiro.jpg'
        },
        {
          nome: 'betim',
          imagem: '../../../../assets/IES/UNA/betim/UNA-betim.jpg'
        },
        {
          nome: 'bom despacho',
          imagem: '../../../../assets/IES/UNA/bom-despacho/UNA-bom-despacho.jpg'
        },
        {
          nome: 'catalao',
          imagem: '../../../../assets/IES/UNA/catalao/UNA-catalao.jpg'
        },
        {
          nome: 'conselheiro lafaiete',
          imagem: '../../../../assets/IES/UNA/conselheiro-lafaiete/UNA-conselheiro-lafaiete.jpg'
        },
        {
          nome: 'contagem',
          imagem: '../../../../assets/IES/UNA/contagem/UNA-contagem.jpg'
        },
        {
          nome: 'cristiano machado',
          imagem: '../../../../assets/IES/UNA/cristiano-machado/UNA-cristiano-machado.jpg'
        },
        {
          nome: 'divinopolis',
          imagem: '../../../../assets/IES/UNA/divinopolis/UNA-divinopolis.jpg'
        },
        {
          nome: 'itabira',
          imagem: '../../../../assets/IES/UNA/itabira/UNA-itabira.jpg'
        },
        {
          nome: 'itumbiara',
          imagem: '../../../../assets/IES/UNA/itumbiara/UNA-itumbiara.jpg'
        },
        {
          nome: 'jatai',
          imagem: '../../../../assets/IES/UNA/jatai/UNA-jatai.jpg'
        },
        {
          nome: 'liberdade',
          imagem: '../../../../assets/IES/UNA/liberdade/UNA-liberdade.jpg'
        },
        {
          nome: 'linha verde',
          imagem: '../../../../assets/IES/UNA/linha-verde/UNA-linha-verde.jpg'
        },
        {
          nome: 'pouso alegre',
          imagem: '../../../../assets/IES/UNA/pouso-alegre/UNA-pouso-alegre.jpg'
        },
        {
          nome: 'sete lagoas',
          imagem: '../../../../assets/IES/UNA/sete-lagoas/UNA-sete-lagoas.jpg'
        },
        {
          nome: 'uberlandia',
          imagem: '../../../../assets/IES/UNA/uberlandia/UNA-uberlandia.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 7,
      nome: 'UNIBH',
      descricao: 'Centro Universitário de Belo Horizonte',
      logo: '../../../../assets/IES/UNIBH/logoUNIBH.png',
      instituicoes: [
        {
          nome: 'estoril',
          imagem: '../../../../assets/IES/UNIBH/estoril/UNIBH-estoril.jpg'
        }
      ]
    },
    {
      id: 8,
      nome: 'UNICURITIBA',
      descricao: 'Centro Universitário Curitiba',
      logo: '../../../../assets/IES/UNICURITIBA/logoUNICURITIBA.png',
      instituicoes: [
        {
          nome: 'milton vianna',
          imagem: '../../../../assets/IES/UNICURITIBA/milton-vianna/UNICURITIBA-milton-vianna.jpg'
        }
      ]
    },
    {
      id: 9,
      nome: 'UNIFACS',
      descricao: 'Universidade Salvador',
      logo: '../../../../assets/IES/UNIFACS/logoUNIFACS.png',
      instituicoes: [
        {
          nome: 'lapa',
          imagem: '../../../../assets/IES/UNIFACS/lapa/UNIFACS-lapa.jpg'
        },
        {
          nome: 'prof. barros',
          imagem: '../../../../assets/IES/UNIFACS/prof-barros/UNIFACS-prof-barros.jpg'
        },
        {
          nome: 'santa monica',
          imagem: '../../../../assets/IES/UNIFACS/santa-monica/UNIFACS-santa-monica.jpg'
        },
        {
          nome: 'tancredo neves',
          imagem: '../../../../assets/IES/UNIFACS/tancredo-neves/UNIFACS-tancredo-neves.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 10,
      nome: 'UNIFG',
      descricao: 'Centro Universitário Faculdade dos Guararapes',
      logo: '../../../../assets/IES/UNIFG/logoUNIFG.png',
      instituicoes: [
        {
          nome: 'guanambi',
          imagem: '../../../../assets/IES/UNIFG/guanambi/UNIFG-guanambi.jpg'
        },
        {
          nome: 'boa vista',
          imagem: '../../../../assets/IES/UNIFG/boa-vista/UNIFG-boa-vista.jpg'
        },
        {
          nome: 'piedade',
          imagem: '../../../../assets/IES/UNIFG/piedade/UNIFG-piedade.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 11,
      nome: 'UNIRITTER',
      descricao: 'Centro Universitário Ritter dos Reis',
      logo: '../../../../assets/IES/UNIRITTER/logoUNIRITTER.png',
      instituicoes: [
        {
          nome: 'canoas',
          imagem: '../../../../assets/IES/UNIRITTER/canoas/UNIRITTER-canoas.jpg'
        },
        {
          nome: 'fapa',
          imagem: '../../../../assets/IES/UNIRITTER/fapa/UNIRITTER-fapa.jpg'
        },
        {
          nome: 'zona sul',
          imagem: '../../../../assets/IES/UNIRITTER/zona-sul/UNIRITTER-zona-sul.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 12,
      nome: 'UNISOCIESC',
      descricao: 'Sociedade Educacional de Santa Catarina',
      logo: '../../../../assets/IES/UNISOCIESC/logoUNISOCIESC.png',
      instituicoes: [
        {
          nome: 'anita garibaldi',
          imagem: '../../../../assets/IES/UNISOCIESC/anita-garibaldi/UNISOCIESC-anita-garibaldi.jpg'
        },
        {
          nome: 'blumenau',
          imagem: '../../../../assets/IES/UNISOCIESC/blumenau/UNISOCIESC-blumenau.jpg'
        },
        {
          nome: 'jaragua do sul',
          imagem: '../../../../assets/IES/UNISOCIESC/jaragua-do-sul/UNISOCIESC-jaragua-do-sul.jpg'
        },
        {
          nome: 'sao bento do sul',
          imagem: '../../../../assets/IES/UNISOCIESC/sao-bento-do-sul/UNISOCIESC-sao-bento-do-sul.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 13,
      nome: 'UNISUL',
      descricao: 'Universidade do Sul de Santa Catarina',
      logo: '../../../../assets/IES/UNISUL/logoUNISUL.png',
      instituicoes: [
        {
          nome: 'ararangua',
          imagem: '../../../../assets/IES/UNISUL/ararangua/UNISUL-ararangua.jpg'
        },
        {
          nome: 'braco do norte',
          imagem: '../../../../assets/IES/UNISUL/braco-do-norte/UNISUL-braco-do-norte.jpg'
        },
        {
          nome: 'continente',
          imagem: '../../../../assets/IES/UNISUL/continente/UNISUL-continente.jpg'
        },
        {
          nome: 'criciuma',
          imagem: '../../../../assets/IES/UNISUL/criciuma/UNISUL-criciuma.jpg'
        },
        {
          nome: 'dib mussi',
          imagem: '../../../../assets/IES/UNISUL/dib-mussi/UNISUL-dib-mussi.jpg'
        },
        {
          nome: 'icara',
          imagem: '../../../../assets/IES/UNISUL/icara/UNISUL-icara.jpg'
        },
        {
          nome: 'ilha',
          imagem: '../../../../assets/IES/UNISUL/ilha/UNISUL-ilha.jpg'
        },
        {
          nome: 'itajai',
          imagem: '../../../../assets/IES/UNISUL/itajai/UNISUL-itajai.jpg'
        },
        {
          nome: 'pedra branca',
          imagem: '../../../../assets/IES/UNISUL/pedra-branca/UNISUL-pedra-branca.jpg'
        },
        {
          nome: 'trajano',
          imagem: '../../../../assets/IES/UNISUL/trajano/UNISUL-trajano.jpg'
        },
        {
          nome: 'tubarao',
          imagem: '../../../../assets/IES/UNISUL/tubarao/UNISUL-tubarao.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 14,
      nome: 'UNP',
      descricao: 'Universidade Potiguar',
      logo: '../../../../assets/IES/UNP/logoUNP.png',
      instituicoes: [
        {
          nome: 'mossoro',
          imagem: '../../../../assets/IES/UNP/mossoro/UNP-mossoro.jpg'
        },
        {
          nome: 'polo caico',
          imagem: '../../../../assets/IES/UNP/polo-caico/UNP-polo-caico.jpg'
        },
        {
          nome: 'polo currais novos',
          imagem: '../../../../assets/IES/UNP/polo-currais-novos/UNP-polo-currais-novos.jpg'
        },
        {
          nome: 'polo limoeiro do norte',
          imagem: '../../../../assets/IES/UNP/polo-limoeiro-do-norte/UNP-polo-limoeiro-do-norte.jpg'
        },
        {
          nome: 'polo pau dos ferros',
          imagem: '../../../../assets/IES/UNP/polo-pau-dos-ferros/UNP-polo-pau-dos-ferros.jpg'
        },
        {
          nome: 'salgado filho',
          imagem: '../../../../assets/IES/UNP/salgado-filho/UNP-salgado-filho.jpg'
        },
        {
          nome: 'zona norte',
          imagem: '../../../../assets/IES/UNP/zona-norte/UNP-zona-norte.jpg'
        }
        // Adicione mais instituições, se necessário, seguindo o padrão acima.
      ]
    },
    {
      id: 15,
      nome: 'USJT',
      descricao: 'Universidade São Judas Tadeu',
      logo: '../../../../assets/IES/USJT/logoUSJT.png',
      instituicoes: [
        {
          nome: 'butanta',
          imagem: '../../../../assets/IES/USJT/butanta/USJT-butanta.jpg'
        },
        {
          nome: 'guarulhos',
          imagem: '../../../../assets/IES/USJT/guarulhos/USJT-guarulhos.jpg'
        },
        {
          nome: 'jabaquara',
          imagem: '../../../../assets/IES/USJT/jabaquara/USJT-jabaquara.jpg'
        },
        {
          nome: 'mooca',
          imagem: '../../../../assets/IES/USJT/mooca/USJT-mooca.jpg'
        },
        {
          nome: 'paulista',
          imagem: '../../../../assets/IES/USJT/paulista/USJT-paulista.jpg'
        },
        {
          nome: 'santana',
          imagem: '../../../../assets/IES/USJT/santana/USJT-santana.jpg'
        },
        {
          nome: 'santo amaro',
          imagem: '../../../../assets/IES/USJT/santo-amaro/USJT-santo-amaro.jpg'
        },
        {
          nome: 'sao bernado do campo',
          imagem: '../../../../assets/IES/USJT/sao-bernado-do-campo/USJT-sao-bernado-do-campo.jpg'
        },
        {
          nome: 'unimonte',
          imagem: '../../../../assets/IES/USJT/unimonte/USJT-unimonte.jpg'
        },
        {
          nome: 'vila leopoldina',
          imagem: '../../../../assets/IES/USJT/vila-leopoldina/USJT-vila-leopoldina.jpg'
        }
      ]
    }
  ]

  constructor (
    private router:Router,
    private iesService: IesSelecionadaService
  ) {}

  onClick(id:number, nome:string):void {
    //salvando a informação da instituição selecionada
    const iesEnviar = this.iesList[id]
    console.log(iesEnviar)
    console.log(nome)
    console.log(id)

    this.iesService.setIesSelecionada(iesEnviar)


    this.router.navigate([`instituicoes/ies/${id}`])
  }

}
