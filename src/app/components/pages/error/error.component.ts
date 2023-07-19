import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
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
