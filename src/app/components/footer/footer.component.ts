import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  data = new Date()
  year = String(this.data.getFullYear())

  prof() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
