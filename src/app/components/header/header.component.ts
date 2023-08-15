import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  show:boolean = false

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.show = false
        const botao = document.querySelector('#button-menu')

        botao?.classList.remove('open')

      }
    })
  }

  clicked(): void {
    this.show = !this.show
    const botao = document.querySelector('#button-menu')

    botao?.classList.toggle('open')

  }

  // // Clique fora do menu, para fechá-lo

  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: MouseEvent) {
  //   const targetElement = event.target as HTMLElement
  //   const menuElement = document.querySelector('menu')

  //   if (menuElement && !menuElement.contains(targetElement)) {
  //     this.show = false // Fecha o menu quando o clique ocorre fora dele
  //   }
  // }
}
