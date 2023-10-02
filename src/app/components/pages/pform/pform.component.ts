import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pform',
  templateUrl: './pform.component.html',
  styleUrls: ['./pform.component.css']
})
export class PformComponent {

  constructor (
    private router:Router
  ) {}

  home() {
    this.router.navigate([
      '/'
    ])
  }

}
