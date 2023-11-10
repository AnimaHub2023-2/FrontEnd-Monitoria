import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-aform',
  templateUrl: './modal-aform.component.html',
  styleUrls: ['./modal-aform.component.css']
})
export class ModalAformComponent {

  modalOpen() {
    const boxCam = document.getElementById('glass-modal')!
    boxCam.classList.add('open')
    boxCam.addEventListener('click', (e: any) => {
      if (e.target.id! == 'box-cam' || e.target.id! == "exit"){
        boxCam.classList.remove('open')
        localStorage['fechaModal'] = 'box-cam'
    }
    })
  }

  ngOnInit() {
    const button = document.getElementById('buttonEnviar')

    button?.addEventListener('click', this.modalOpen)

    this.modalOpen()
  }

}
