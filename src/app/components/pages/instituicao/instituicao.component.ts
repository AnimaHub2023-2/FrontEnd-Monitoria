import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

import { ies } from 'src/app/interface/ies';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent {

  iesList:Array<ies> = [
    {
      id: 0,
      nome: 'ages',
      descricao: 'Centro Universitário',
      iesLogo: '../../../../assets/IES/AGES/logoAGES-ies.jpg',
      logo: '../../../../assets/IES/AGES/logoAGES.png',
      instituicoes: [
        {
          nome: 'Irece',
          imagem: '../../../../assets/IES/AGES/irece/AGES-irece.jpg'
        },
        {
          nome: 'Jacobina',
          imagem: '../../../../assets/IES/AGES/Jacobina/AGES-Jacobina.jpg'
        },
        {
          nome: 'Paripiranga',
          imagem: '../../../../assets/IES/AGES/Paripiranga/AGES-Paripiranga.jpg'
        },
        {
          nome: 'Senhor do Bonfim',
          imagem: '../../../../assets/IES/AGES/senhor-do-bonfim/AGES-senhor-do-bonfim.jpg'
        },
        {
          nome: 'Tucano',
          imagem: '../../../../assets/IES/AGES/Tucano/AGES-Tucano.jpg'
        }
      ]
    },
    {
      id: 1,
      nome: 'fadergs',
      descricao: 'Faculdade de Desenvolvimento do Rio Grande do Sul',
      iesLogo: '../../../../assets/IES/FADERGS/logoFADERGS-ies.jpg',
      logo: '../../../../assets/IES/FADERGS/logoFADERGS.png',
      instituicoes: [
        {
          nome:'Centro',
          imagem: '../../../../assets/IES/FADERGS/Centro/FADERGS-Centro.jpg'
        }
      ]
    },
    {
      id: 2,
      nome: 'faseh',
      descricao: 'Faculdade da Saúde e Ecologia Humana',
      iesLogo: '../../../../assets/IES/FASEH/logoFASEH-ies.jpg',
      logo: '../../../../assets/IES/FASEH/logoFASEH.png',
      instituicoes: [
        {
          nome: 'Vespasiano',
          imagem: '../../../../assets/IES/FASEH/vespasiano/FASEH-vespasiano.jpg'
        }
      ]
    },
    {
      id: 3,
      nome: 'fpb',
      descricao: 'Faculdade Internacional da Paraíba',
      iesLogo: '../../../../assets/IES/FPB/logoFPB-ies.jpg',
      logo: '../../../../assets/IES/FPB/logoFPB.png',
      instituicoes: [
        {
          nome: 'Tambia',
          imagem: '../../../../assets/IES/FPB/tambia/FPB-tambia.jpg'
        }
      ]
    },
    {
      id: 4,
      nome: 'ibmr',
      descricao: 'Instituto Brasileiro de Medicina de Reabilitação',
      iesLogo: '../../../../assets/IES/IBMR/logoIBMR-ies.jpg',
      logo: '../../../../assets/IES/IBMR/logoIBMR.png',
      instituicoes: [
        {
          nome: 'Barra',
          imagem: '../../../../assets/IES/IBMR/barra/IBMR-barra.jpg'
        },
        {
          nome: 'Botafogo',
          imagem: '../../../../assets/IES/IBMR/Botafogo/IBMR-Botafogo.jpg'
        },
        {
          nome: 'Catete',
          imagem: '../../../../assets/IES/IBMR/Catete/IBMR-Catete.jpg'
        }
      ]
    },
    {
      id: 5,
      nome: 'uam',
      descricao: 'Universidade Anhembi Morumbi',
      iesLogo: '../../../../assets/IES/UAM/logoUAM-ies.jpg',
      logo: '../../../../assets/IES/UAM/logoUAM.png',
      instituicoes: [
        {
          nome: 'Mooca',
          imagem: '../../../../assets/IES/UAM/Mooca/UAM-Mooca.jpg'
        },
        {
          nome: 'Paulista',
          imagem: '../../../../assets/IES/UAM/Paulista/UAM-Paulista.jpg'
        },
        {
          nome: 'Piracicaba',
          imagem: '../../../../assets/IES/UAM/Piracicaba/UAM-Piracicaba.jpg'
        },
        {
          nome: 'São José dos Campos',
          imagem: '../../../../assets/IES/UAM/sao-jose-dos-campos/UAM-sao-jose-dos-campos.jpg'
        },
        {
          nome: 'Vila Olimpia',
          imagem: '../../../../assets/IES/UAM/vila-olimpia/UAM-vila-olimpia.jpg'
        }
      ]
    },
    {
      id: 6,
      nome: 'una',
      descricao: 'Centro Universitário',
      iesLogo: '../../../../assets/IES/UNA/logoUNA-ies.jpg',
      logo: '../../../../assets/IES/UNA/logoUNA.png',
      instituicoes: [
        {
          nome: 'Aimores',
          imagem: '../../../../assets/IES/UNA/aimores/UNA-aimores.jpg'
        },
        {
          nome: 'Barreiro',
          imagem: '../../../../assets/IES/UNA/Barreiro/UNA-Barreiro.jpg'
        },
        {
          nome: 'Betim',
          imagem: '../../../../assets/IES/UNA/Betim/UNA-Betim.jpg'
        },
        {
          nome: 'Bom Despacho',
          imagem: '../../../../assets/IES/UNA/bom-despacho/UNA-bom-despacho.jpg'
        },
        {
          nome: 'Catalao',
          imagem: '../../../../assets/IES/UNA/catalao/UNA-catalao.jpg'
        },
        {
          nome: 'Conselheiro Lafaiete',
          imagem: '../../../../assets/IES/UNA/conselheiro-lafaiete/UNA-conselheiro-lafaiete.jpg'
        },
        {
          nome: 'Contagem',
          imagem: '../../../../assets/IES/UNA/Contagem/UNA-Contagem.jpg'
        },
        {
          nome: 'Cristiano Machado',
          imagem: '../../../../assets/IES/UNA/cristiano-machado/UNA-cristiano-machado.jpg'
        },
        {
          nome: 'Divinopolis',
          imagem: '../../../../assets/IES/UNA/divinopolis/UNA-divinopolis.jpg'
        },
        {
          nome: 'Itabira',
          imagem: '../../../../assets/IES/UNA/itabira/UNA-itabira.jpg'
        },
        {
          nome: 'Itumbiara',
          imagem: '../../../../assets/IES/UNA/itumbiara/UNA-itumbiara.jpg'
        },
        {
          nome: 'Jatai',
          imagem: '../../../../assets/IES/UNA/jatai/UNA-jatai.jpg'
        },
        {
          nome: 'Liberdade',
          imagem: '../../../../assets/IES/UNA/Liberdade/UNA-Liberdade.jpg'
        },
        {
          nome: 'Linha Verde',
          imagem: '../../../../assets/IES/UNA/linha-verde/UNA-linha-verde.jpg'
        },
        {
          nome: 'Pouso Alegre',
          imagem: '../../../../assets/IES/UNA/pouso-alegre/UNA-pouso-alegre.jpg'
        },
        {
          nome: 'Sete Lagoas',
          imagem: '../../../../assets/IES/UNA/sete-lagoas/UNA-sete-lagoas.jpg'
        },
        {
          nome: 'Uberlandia',
          imagem: '../../../../assets/IES/UNA/uberlandia/UNA-uberlandia.jpg'
        }
      ]
    },
    {
      id: 7,
      nome: 'unibh',
      descricao: 'Centro Universitário de Belo Horizonte',
      iesLogo: '../../../../assets/IES/UNIBH/logoUNIBH-ies.jpg',
      logo: '../../../../assets/IES/UNIBH/logoUNIBH.png',
      instituicoes: [
        {
          nome: 'Estoril',
          imagem: '../../../../assets/IES/UNIBH/Estoril/UNIBH-Estoril.jpg'
        }
      ]
    },
    {
      id: 8,
      nome: 'unicuritiba',
      descricao: 'Centro Universitário Curitiba',
      iesLogo: '../../../../assets/IES/UNICURITIBA/logoUNICURITIBA-ies.jpg',
      logo: '../../../../assets/IES/UNICURITIBA/logoUNICURITIBA.png',
      instituicoes: [
        {
          nome: 'Milton Vianna',
          imagem: '../../../../assets/IES/UNICURITIBA/milton-vianna/UNICURITIBA-milton-vianna.jpg'
        }
      ]
    },
    {
      id: 9,
      nome: 'unifacs',
      descricao: 'Universidade Salvador',
      iesLogo: '../../../../assets/IES/UNIFACS/logoUNIFACS-ies.jpg',
      logo: '../../../../assets/IES/UNIFACS/logoUNIFACS.png',
      instituicoes: [
        {
          nome: 'Lapa',
          imagem: '../../../../assets/IES/UNIFACS/Lapa/UNIFACS-Lapa.jpg'
        },
        {
          nome: 'Prof. Barros',
          imagem: '../../../../assets/IES/UNIFACS/prof-barros/UNIFACS-prof-barros.jpg'
        },
        {
          nome: 'Santa Monica',
          imagem: '../../../../assets/IES/UNIFACS/santa-monica/UNIFACS-santa-monica.jpg'
        },
        {
          nome: 'Tancredo Neves',
          imagem: '../../../../assets/IES/UNIFACS/tancredo-neves/UNIFACS-tancredo-neves.jpg'
        }
      ]
    },
    {
      id: 10,
      nome: 'unifg',
      descricao: 'Centro Universitário Faculdade dos Guararapes',
      iesLogo: '../../../../assets/IES/UNIFG/logoUNIFG-ies.jpg',
      logo: '../../../../assets/IES/UNIFG/logoUNIFG.png',
      instituicoes: [
        {
          nome: 'Guanambi',
          imagem: '../../../../assets/IES/UNIFG/guanambi/UNIFG-guanambi.jpg'
        },
        {
          nome: 'Boa Vista',
          imagem: '../../../../assets/IES/UNIFG/boa-vista/UNIFG-boa-vista.jpg'
        },
        {
          nome: 'Piedade',
          imagem: '../../../../assets/IES/UNIFG/piedade/UNIFG-piedade.jpg'
        }
      ]
    },
    {
      id: 11,
      nome: 'uniritter',
      descricao: 'Centro Universitário Ritter dos Reis',
      iesLogo: '../../../../assets/IES/UNIRITTER/logoUNIRITTER-ies.jpg',
      logo: '../../../../assets/IES/UNIRITTER/logoUNIRITTER.png',
      instituicoes: [
        {
          nome: 'Canoas',
          imagem: '../../../../assets/IES/UNIRITTER/Canoas/UNIRITTER-Canoas.jpg'
        },
        {
          nome: 'Fapa',
          imagem: '../../../../assets/IES/UNIRITTER/FAPA/UNIRITTER-FAPA.jpg'
        },
        {
          nome: 'Zona Sul',
          imagem: '../../../../assets/IES/UNIRITTER/zona-sul/UNIRITTER-zona-sul.jpg'
        }
      ]
    },
    {
      id: 12,
      nome: 'unisociesc',
      descricao: 'Sociedade Educacional de Santa Catarina',
      iesLogo: '../../../../assets/IES/UNISOCIESC/logoUNISOCIESC-ies.jpg',
      logo: '../../../../assets/IES/UNISOCIESC/logoUNISOCIESC.png',
      instituicoes: [
        {
          nome: 'Anita Garibaldi',
          imagem: '../../../../assets/IES/UNISOCIESC/anita-garibaldi/UNISOCIESC-anita-garibaldi.jpg'
        },
        {
          nome: 'Blumenau',
          imagem: '../../../../assets/IES/UNISOCIESC/Blumenau/UNISOCIESC-Blumenau.jpg'
        },
        {
          nome: 'Jaragua do Sul',
          imagem: '../../../../assets/IES/UNISOCIESC/jaragua-do-sul/UNISOCIESC-jaragua-do-sul.jpg'
        },
        {
          nome: 'São Bento do Sul',
          imagem: '../../../../assets/IES/UNISOCIESC/sao-bento-do-sul/UNISOCIESC-sao-bento-do-sul.jpg'
        }
      ]
    },
    {
      id: 13,
      nome: 'unisul',
      descricao: 'Universidade do Sul de Santa Catarina',
      iesLogo: '../../../../assets/IES/UNISUL/logoUNISUL-ies.jpg',
      logo: '../../../../assets/IES/UNISUL/logoUNISUL.png',
      instituicoes: [
        {
          nome: 'Ararangua',
          imagem: '../../../../assets/IES/UNISUL/ararangua/UNISUL-ararangua.jpg'
        },
        {
          nome: 'Braço do Norte',
          imagem: '../../../../assets/IES/UNISUL/braco-do-norte/UNISUL-braco-do-norte.jpg'
        },
        {
          nome: 'Continente',
          imagem: '../../../../assets/IES/UNISUL/Continente/UNISUL-Continente.jpg'
        },
        {
          nome: 'Criciuma',
          imagem: '../../../../assets/IES/UNISUL/criciuma/UNISUL-criciuma.jpg'
        },
        {
          nome: 'Dib Mussi',
          imagem: '../../../../assets/IES/UNISUL/dib-mussi/UNISUL-dib-mussi.jpg'
        },
        {
          nome: 'Icara',
          imagem: '../../../../assets/IES/UNISUL/icara/UNISUL-icara.jpg'
        },
        {
          nome: 'Ilha',
          imagem: '../../../../assets/IES/UNISUL/Ilha/UNISUL-Ilha.jpg'
        },
        {
          nome: 'Itajai',
          imagem: '../../../../assets/IES/UNISUL/itajai/UNISUL-itajai.jpg'
        },
        {
          nome: 'Pedra Branca',
          imagem: '../../../../assets/IES/UNISUL/pedra-branca/UNISUL-pedra-branca.jpg'
        },
        {
          nome: 'Trajano',
          imagem: '../../../../assets/IES/UNISUL/Trajano/UNISUL-Trajano.jpg'
        },
        {
          nome: 'Tubarao',
          imagem: '../../../../assets/IES/UNISUL/tubarao/UNISUL-tubarao.jpg'
        }
      ]
    },
    {
      id: 14,
      nome: 'unp',
      descricao: 'Universidade Potiguar',
      iesLogo: '../../../../assets/IES/UNP/logoUNP-ies.jpg',
      logo: '../../../../assets/IES/UNP/logoUNP.png',
      instituicoes: [
        {
          nome: 'Mossoro',
          imagem: '../../../../assets/IES/UNP/mossoro/UNP-mossoro.jpg'
        },
        {
          nome: 'Polo Caico',
          imagem: '../../../../assets/IES/UNP/polo-caico/UNP-polo-caico.jpg'
        },
        {
          nome: 'Polo Currais Novos',
          imagem: '../../../../assets/IES/UNP/polo-currais-novos/UNP-polo-currais-novos.jpg'
        },
        {
          nome: 'Polo Limoeiro do Norte',
          imagem: '../../../../assets/IES/UNP/polo-limoeiro-do-norte/UNP-polo-limoeiro-do-norte.jpg'
        },
        {
          nome: 'Polo Pau dos Ferros',
          imagem: '../../../../assets/IES/UNP/polo-pau-dos-ferros/UNP-polo-pau-dos-ferros.jpg'
        },
        {
          nome: 'Salgado Filho',
          imagem: '../../../../assets/IES/UNP/salgado-filho/UNP-salgado-filho.jpg'
        },
        {
          nome: 'Zona Norte',
          imagem: '../../../../assets/IES/UNP/zona-norte/UNP-zona-norte.jpg'
        }
      ]
    },
    {
      id: 15,
      nome: 'usjt',
      descricao: 'Universidade São Judas Tadeu',
      iesLogo: '../../../../assets/IES/USJT/logoUSJT-ies.jpg',
      logo: '../../../../assets/IES/USJT/logoUSJT.png',
      instituicoes: [
        {
          nome: 'Butanta',
          imagem: '../../../../assets/IES/USJT/butanta/USJT-butanta.jpg'
        },
        {
          nome: 'Guarulhos',
          imagem: '../../../../assets/IES/USJT/Guarulhos/USJT-Guarulhos.jpg'
        },
        {
          nome: 'Jabaquara',
          imagem: '../../../../assets/IES/USJT/Jabaquara/USJT-Jabaquara.jpg'
        },
        {
          nome: 'Mooca',
          imagem: '../../../../assets/IES/USJT/Mooca/USJT-Mooca.jpg'
        },
        {
          nome: 'Paulista',
          imagem: '../../../../assets/IES/USJT/Paulista/USJT-Paulista.jpg'
        },
        {
          nome: 'Santana',
          imagem: '../../../../assets/IES/USJT/Santana/USJT-Santana.jpg'
        },
        {
          nome: 'Santo Amaro',
          imagem: '../../../../assets/IES/USJT/santo-amaro/USJT-santo-amaro.jpg'
        },
        {
          nome: 'Sao Bernado do Campo',
          imagem: '../../../../assets/IES/USJT/sao-bernado-do-campo/USJT-sao-bernado-do-campo.jpg'
        },
        {
          nome: 'Unimonte',
          imagem: '../../../../assets/IES/USJT/Unimonte/USJT-Unimonte.jpg'
        },
        {
          nome: 'Vila Leopoldina',
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
    const iesEnviar = this.iesList[id]

    this.iesService.setIesSelecionada(iesEnviar)

    this.router.navigate([`instituicoes/${nome}`])

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
