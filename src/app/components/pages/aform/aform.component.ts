import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css'],

  
})
export class AformComponent {

}

export class ErrorComponent {

  constructor(
    private router: Router,
    private location: Location
  ) {}

  voltar() {
    this.location.back()
  }

  homeBack():void {
    this.router.navigate(['/'])
  }

}


