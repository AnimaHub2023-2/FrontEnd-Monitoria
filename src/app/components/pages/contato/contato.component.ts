import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

facebook = faFacebookF
instagram = faInstagram
youtube = faYoutube
linkedin = faLinkedinIn

}
