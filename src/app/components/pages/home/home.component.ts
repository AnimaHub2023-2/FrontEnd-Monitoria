import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
  ) {}

  data = new Date()
  year = String(this.data.getFullYear())

  goSelection() {
    this.router.navigate(['/selecao-edital'])
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  goFAQ() {
    this.router.navigate(['/faq'])
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  goInstituicoes() {
    this.router.navigate(['/instituicoes'])
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
