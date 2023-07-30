import { Component } from '@angular/core';

@Component({
  selector: 'app-edital',
  templateUrl: './edital.component.html',
  styleUrls: ['./edital.component.css']
})
export class EditalComponent {
  data = new Date()
  year = String(this.data.getFullYear())
}
