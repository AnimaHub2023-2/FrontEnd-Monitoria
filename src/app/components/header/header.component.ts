import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  faBars = faBars
  show = false

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.show = false; // Fecha o menu ao navegar para outro link
      }
    })
  }

  clicked(): void {
    this.show = !this.show
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
